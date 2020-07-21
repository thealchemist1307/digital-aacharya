import React from 'react';
import axios from "axios"
import EnrolledClassCard from "./EnrolledClassCard"
class EnrolledClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requests:[]
        };
    }
    
    render() {
        axios
      .get("http://localhost:3000/api/addclass/get", "test@g.com")
      .then(res => {
        this.setState({requests:res.data});
      })
      .catch(error => {
        console.log(error);
        console.log("Add Class Error");
      });
      const cabcards = this.state.requests.map((item, index) => {
       
       
        return (
          <EnrolledClassCard
            key={index}
            name={item.name}
            subject={item.subject}
            time={item.time}
            fees={item.fees}
            status={item.status}
          >/</EnrolledClassCard>
        );
        
      });
      return (
        <div >
        <h1 style={{color:"black",fontSize:"50px"}}>Enrolled Class</h1>
      <div>{cabcards}</div>
    </div>
  
      );
    }
  }
  
  
  export default EnrolledClass;