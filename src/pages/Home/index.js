import React, { useState } from "react";
import { Octokit } from "@octokit/rest";
import _ from "lodash";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  repoListItemDesc: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

let octokit = new Octokit({});

function Home() {
  const classes = useStyles();
  const [state, setState] = useState({
    user: false,
    ownerName: "",
    repos: [],
    fromDate: moment().subtract(1, "y"),
    toDate: moment(),
    contributions: {},
    loading: false,
    key: "",
  });

  /**
   * Seems like the concepts of hooks is not implemented here
 * the correct way of using useState hook
 */

  // const [repos, setRepo] = useState([]);
  // const [user, setUser] = useState(false);
  // const [ownerName, setOwnerName] = useState("");
  // const [fromDate, setFromDate] = useState(moment().subtract(1, "y"));
  // const [toDate, setToDate] = useState(moment());
  // const [loading, setLoading] = useState(false);
  // const [key, setKey] = useState("");

  const contributions = _.chain(state.contributions)
    .map((item) => item.total)
    .reduce((acc, contribution) => acc + contribution, 0)
    .value();
  return (
    <section>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          octokit = new Octokit({
            auth: state.key,
          });
        }}
      >
        <TextField
          id="key"
          label="GitHub Personal access key"
          onChange={($event) => {
            setState(Object.assign({}, state, { key: $event.target.value }));
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Authenticate
        </Button>
      </form>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          loadRepos(state, setState);
        }}
      >
        <TextField
          id="username"
          label="Username"
          onChange={($event) => {
            setState(
              Object.assign({}, state, { ownerName: $event.target.value })
            );
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Get
        </Button>
      </form>

      {state.repos.length && (
        <div>
          <h4>Contributions for last one year</h4>
          {/* <form className={classes.container} noValidate>
            <TextField
              id="from-date"
              label="From"
              type="date"
              defaultValue={state.fromDate.format("YYYY-MM-DD")}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="from-date"
              label="From"
              type="date"
              defaultValue={state.toDate.format("YYYY-MM-DD")}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form> */}
          <span>{contributions}</span>
        </div>
      )}
      {state.loading && <CircularProgress />}

      <List component="nav" aria-label="main mailbox folders">
        {state.repos ? state.repos.map(item => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderOpenIcon />
              </Avatar>
            </ListItemAvatar>
            <div className={classes.repoListItemDesc}>
              <ListItemText primary={item.name} secondary={item.description} />
              <a href={item.html_url} target="_blank">
                {item.html_url}
              </a>
            </div>
          </ListItem>
        )) : "You do not have any repos"}
      </List>
    </section>
  );
}

function loadRepos(state, setState) {
  setState(Object.assign({}, state, { loading: true }));
  octokit.repos.listForOrg({ org: state.ownerName }).then(
    (response) => {
      const newState = Object.assign({}, state, {
        user: true,
        repos: response.data,
        loading: true,
      });
      setState(newState);
      getContributions(newState, setState, newState.repos);
    },
    (err) => {
      loaduserData(state, setState);
      console.log(err);
    }
  );
}

function loaduserData(state, setState) {
  octokit.repos.listForUser({ username: state.ownerName }).then(
    (response) => {
      const newState = Object.assign({}, state, {
        user: true,
        repos: response.data,
        loading: true,
      });
      setState(newState);
      getContributions(newState, setState, newState.repos);
    },
    (err) => {
      console.log(err);
      setState(Object.assign({}, state, { loading: false }));
    }
  );
}

function combinedState(count, state, setState) {
  let newCount = count;
  let contributions = {};
  return (responseData) => {
    newCount--;
    contributions = _.reduce(
      responseData,
      (acc, item) => {
        const weekData = _.get(acc, item.week, {
          total: 0,
          week: item.week,
          days: [0, 0, 0, 0, 0, 0, 0],
        });
        weekData.total += item.total;
        weekData.days = _.map(
          weekData.days,
          (day, index) => day + _.get(item, ["days", index], 0)
        );
        const newAcc = Object.assign({}, acc, { [item.week]: weekData });
        return newAcc;
      },
      contributions
    );
    if (newCount == 0) {
      setState(Object.assign({}, state, { contributions, loading: false }));
    }
  };
}

function getContributions(state, setState, repos) {
  const stateCallback = combinedState(repos.length, state, setState);
  _.forEach(repos, (repo) => {
    setTimeout(getRepoInfo.bind(this, stateCallback, repo), 400);
  });
}

function getRepoInfo(callback, repo) {
  octokit.repos
    .getCommitActivityStats({
      owner: repo.owner.login,
      repo: repo.name,
    })
    .then(
      (response) => {
        callback(response.data);
      },
      (err) => {
        console.log(err);
      }
    );
}

export default Home;
