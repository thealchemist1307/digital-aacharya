import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Dashboard  from './Dashboard';
import Sidebar from './SideNav';
import { Container , Col , Row } from 'react-bootstrap'
import "../../css/tutor.css"
import AddClass from "./AddClass"
import MyClass from "./MyClass"
function Student() {
  return (
   <div className="tutor">
   <React.Fragment>
      <Router>
        <NavigationBar />
        <Container fluid>
        <Row>
        <Col xs={2} style={{alignItems:"flex-start",marginLeft:"-25px"}}>
        <Sidebar />
        </Col>
        <Col style={{marginRight:"50px",paddingTop:"50px"}}>
        
          <Route path="/Student/" component={Dashboard} />
          
      
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Student;
