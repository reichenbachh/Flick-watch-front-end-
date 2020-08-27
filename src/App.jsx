import React from "react";
import Home from "./pages/Home";
import LoginArea from "./pages/LoginArea";
import TrendingArea from "./components/trending/TrendingArea";
import MoviePage from "./components/movie/MoviePage";
import ShowsPage from "./components/shows/ShowsPage";
import MovieDetails from "./components/movie/MovieDetails";
import ShowDetails from "./components/shows/ShowDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
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
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
