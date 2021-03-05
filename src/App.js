import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/Nomatch/NoMatch';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
