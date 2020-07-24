import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./components/login"
import StudentLogin from "./components/StudentLogin"
import TutorLogin from "./components/TutorLogin"
import Tutor from "./components/Tutor/Tutor"
import 'bootstrap/dist/css/bootstrap.css';
import Student from "./components/Student/Student"
import Admin from "./components/Admin/Admin"
import AdminLogin from "./components/Admin/AdminLogin"
function App() {
  return (
    <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/TutorLogin" component={TutorLogin}></Route>
            <Route exact path="/StudentLogin" component={StudentLogin}></Route>
            <Route path="/Tutor/" component={Tutor}></Route>
            <Route path="/Student/" component={Student}></Route>
            <Route exact path="/Admin/login/" component={AdminLogin} />
          <Route exact path="/Admin/tr" component={Admin} />
        </Router>
  );
}

export default App;
