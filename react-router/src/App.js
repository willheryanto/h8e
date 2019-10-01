import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Login from './containers/Login'

import './App.css';

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = false // You may need to use global state to store this.

  return (
    <Route {...rest} >
      {
        isLoggedIn
          ? children
          : <Redirect to={{ pathname: "/login", state: { from: rest.path } }} />
      }
    </Route>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Link className="App-link" to="/home"> Home </Link> |
        <Link className="App-link" to="/about"> About </Link> |
        <Link className="App-link" to="/contact"> Contact </Link>
      </div>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/contact">
          <Contact />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
