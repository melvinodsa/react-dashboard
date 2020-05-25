import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { Octokit } from "@octokit/rest";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const octokit = new Octokit({});

function Home() {
  const classes = useStyles();
  const [state, setState] = useState({ user: false, ownerName: "", repos: [] });
  return (
    <section>
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
          id="standard-basic"
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

      <List component="nav" aria-label="main mailbox folders">
        {_.map(state.repos, (item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>
                <FolderOpenIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </section>
  );
}

function loadRepos(state, setState) {
  octokit.repos.listForOrg({ org: state.ownerName }).then(
    (response) => {
      setState(Object.assign({}, state, { user: false, repos: response.data }));
    },
    (err) => {
      console.log(err);
    }
  );
  octokit.repos.listForUser({ username: state.ownerName }).then(
    (response) => {
      setState(Object.assign({}, state, { user: true, repos: response.data }));
    },
    (err) => {
      console.log(err);
    }
  );
}

export default Home;
