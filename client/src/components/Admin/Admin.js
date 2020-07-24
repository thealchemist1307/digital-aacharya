import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Sidebar from './SideNav';
import { Container , Col , Row } from 'react-bootstrap'
import "../../css/tutor.css"
import TutorRequest from "./TutorRequests"
import StudentFeedback from "./StudentFeedback"
import ClassRequest from "./ClassRequest"
function Admin() {
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
        
          <Route exact path="/Admin/tr" component={TutorRequest} />
          <Route exact path="/Admin/sf" component={StudentFeedback} />
          <Route exact path="/Admin/cr" component={ClassRequest} />
          
      
        </Col>
        </Row>
        </Container>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default Admin;
