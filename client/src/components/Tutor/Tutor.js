import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import { Dashboard } from './Dashboard';
import Sidebar from './SideNav';

function Tutor() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about"  />
          <Route />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Tutor;
