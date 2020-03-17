import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Update from './update'
import Project2 from './project2'


export function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">About</Link>
          </li> 
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Project2/>
          </Route>
          <Route path="/admin">
            <Update />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}


class App extends Component {
  render() {
    return ( 
      BasicExample() 
    );
  }
}

export default App;
