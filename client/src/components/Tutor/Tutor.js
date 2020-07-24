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
        <Container fluid>
        <Row>
        <Col xs={2} style={{alignItems:"flex-start",marginLeft:"-25px"}}>
        <Sidebar location={location.pathname} />
        </Col>
        <Col style={{marginRight:"50px",paddingTop:"50px"}}>
        
          <Route exact path="/Tutor/" component={Dashboard} />
          <Route exact path="/Tutor/AddClass/" component={AddClass} />
          <Route exact path="/Tutor/MyClass/" component={MyClass} />
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
