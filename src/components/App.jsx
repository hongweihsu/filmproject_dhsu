import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { MoviesPage, Actors, MovieInformation, Profile, NavigationBar } from '.';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavigationBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/"><MoviesPage /></Route>
          <Route exact path="/movie/:id"><MovieInformation /></Route>
          <Route exact path="/actors/:id"><Actors /></Route>
          <Route exact path="/profile/:id"><Profile /></Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
