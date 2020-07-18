import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/login"
import StudentLogin from "./components/StudentLogin"
import TutorLogin from "./components/TutorLogin"
import Tutor from "./components/Tutor/Tutor"
import 'bootstrap/dist/css/bootstrap.css';
import AddClass from "./components/Tutor/AddClass"
import MyClass from "./components/Tutor/MyClass"
function App() {
  return (
    <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/TutorLogin" component={TutorLogin}></Route>
            <Route exact path="/StudentLogin" component={StudentLogin}></Route>
            <Route path="/Tutor/" component={Tutor}></Route>
        </Router>
  );
}

export default App;
