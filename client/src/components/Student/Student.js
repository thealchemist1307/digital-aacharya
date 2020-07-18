import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Dashboard  from './Dashboard';
import Sidebar from './SideNav';
import { Container , Col , Row } from 'react-bootstrap'
import "../../css/tutor.css"
import SearchClass from "./SearchClass"
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
        
          <Route exact path="/Student/" component={Dashboard} />
          <Route exact path="/Student/SearchClass" component={SearchClass} />
          <Route exact path="/Student/MyClass" component={MyClass} />
          
      
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Student;
