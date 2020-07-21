import React from 'react';
import { Container , Col , Row } from 'react-bootstrap'
import AddClassForm from "./AddClassForm"
import EnrolledClass from "./EnrolledClass"
class AddClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
  
        };
    }
    render() {
      return (
        <div style={styles.div}>
          <Container fluid>
          <Row>
            <Col style={styles.enrolledCol}  ><EnrolledClass /></Col>
            <Col style={styles.form}><AddClassForm /></Col>
          </Row>
          </Container>
    </div>
  
      );
    }
  }
  
  const styles={
    div:{backgroundColor:"#dbdbdb",
            borderRadius:"25px",
            color:"black", 
            height:"1000px",
            textAlign:"center"},
    enrolledCol:{overflowY:'scroll',
                  marginTop:"50px",
                  marginBottom:"50px",
                  height:"900px",
                  borderWidth:"20px",
                  borderColor:"black"},
    form:{
    display:"flex",
    marginTop:"50px",
    marginBottom:"50px",
    height:"900px",
    borderWidth:"20px",
    borderColor:"black",
  alignItems:"flex-start",
justifyContent:"space-around"}

    
    }
  export default AddClass;