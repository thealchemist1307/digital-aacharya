import React from 'react';
import "../../css/tutor.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch,useLocation } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Dashboard  from './Dashboard';
import Sidebar from './SideNav';
import TutorClassPage from "../Classes/TutorClassPage"
import { Container , Col , Row } from 'react-bootstrap'

import AddClass from "./AddClass"
import MyClass from "./MyClass"
function Tutor() {
  let location = useLocation();
  console.log("Tutor "+location.pathname)
  return (
   <div className="tutor">
   <React.Fragment>
      <Router>
        <NavigationBar />
        <Container 
        style={{height:"100%"}}
        fluid>
        <Row>
        <Col  >
        <Sidebar location={location.pathname} />
        </Col>
        <Col xs={10} style={{paddingTop:"10px",backgroundColor:'red'}}>
        
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/AddClass/" component={AddClass} />
          <Route exact path="/MyClass/" component={MyClass} />
          <Route path="/Tutor/Class/:id" component={TutorClassPage}></Route>
          
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Tutor;
