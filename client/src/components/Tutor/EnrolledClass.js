import React from 'react';
import axios from "axios"
import {CardGroup, CardColumns} from "react-bootstrap"
import EnrolledClassCard from "./EnrolledClassCard"
class EnrolledClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requests:[]
        };

    }
    
    render() {
      return (
        <div style={{paddingLeft:"20px",alignItems:'center'}} >
        <h1 style={{color:"black",fontSize:"50px"}}>Enrolled Class</h1>
        {this.props.requests.map((item, index) => {
       
       
       return (
         <EnrolledClassCard
           key={index}
            item={item}
         ></EnrolledClassCard>
       );
       
     })}
    </div>
  
      );
    }
  }
  
  
  export default EnrolledClass;