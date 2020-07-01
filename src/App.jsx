import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginArea from "./pages/LoginArea";
import TrendingArea from "./components/trending/TrendingArea";
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
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
