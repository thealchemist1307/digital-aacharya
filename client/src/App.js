import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tutor from "./components/Tutor/Tutor"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
            <Route exact path="/" component={Tutor}></Route>
        </Router>
  );
}

export default App;
