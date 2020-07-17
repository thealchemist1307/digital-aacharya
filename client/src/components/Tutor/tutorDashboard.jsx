
import React from "react";
import PropTypes from "prop-types";
import { Container , Col , Row } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import "../../css/tutorDashboard.css";
import HorizontalNav from "./SideNav"
import VerticalNav from "./NavigationBar"

class TutorDashboard extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
  <div>
      <HorizontalNav />
  
  <Container fluid >
  
      <Row >
        <Col style={{height:"100%"}} sm={2}><VerticalNav /></Col>
        <Col sm={5}>Test Area</Col>
      </Row>
    </Container>
</div>
    );
  }
}

TutorDashboard.propTypes = {

}

TutorDashboard.defaultProps = {

}


export default TutorDashboard;
          