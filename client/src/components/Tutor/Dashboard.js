import React from 'react';
import axios from "axios"
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
  
        };
    }
    componentDidMount()
    {
      
    }
    render() {
      return (
        <div style={{backgroundColor:"#dbdbdb",borderRadius:"25px",color:"black", height:"1000px",textAlign:"center"}}>
        <h1 style={{color:"black",fontSize:"50px"}}>Dashboard</h1>
    </div>
  
      );
    }
  }
  
  
  export default Dashboard;