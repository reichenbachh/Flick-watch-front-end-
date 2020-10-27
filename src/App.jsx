import React, { useEffect } from "react";
import { connect } from "react-redux";
import Home from "./pages/Home";
import LoginArea from "./pages/LoginArea";
import Search from "./components/search/Search";
import TrendingArea from "./components/trending/TrendingArea";
import MoviePage from "./components/movie/MoviePage";
import ShowsPage from "./components/shows/ShowsPage";
import MovieDetails from "./components/movie/MovieDetails";
import ShowDetails from "./components/shows/ShowDetails";
import ResetPassword from "./components/ResetPassword";
import TrackedFlicks from "./components/TrackedFlicks/TrackedFlicks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { loadUser } from "./actions/authActions";

import "./App.css";
import Nav from "./components/layout/Nav";

function App({ loadUser }) {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginArea} />
          <Route exact path='/trending' component={TrendingArea} />
          <Route exact path='/movies' component={MoviePage} />
          <Route exact path='/tvShows' component={ShowsPage} />
          <Route
            exact
            path='/movieDetails/:id'
            component={withRouter(MovieDetails)}
          />
          <Route exact path='/showDetails/:id' component={ShowDetails} />
          <Route
            exact
            path='/passwordReset/:resetToken'
            component={ResetPassword}
          />
          <Route exact path='/search' component={Search} />
          <Route exact path='/trackedFlicks' component={TrackedFlicks} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, { loadUser })(App);
