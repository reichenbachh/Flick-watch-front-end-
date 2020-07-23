import React from "react";
import Home from "./pages/Home";
import LoginArea from "./pages/LoginArea";
import TrendingArea from "./components/trending/TrendingArea";
import MoviePage from "./components/movie/MoviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
