import React from "react";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import axios from "axios";

import "../../css/card.css";


class EnrolledClassCard extends React.Component {
  constructor(props) {
    super(props);

    this.onSend = this.onSend.bind(this);
    this.state = {
      requests: [],
      count: 0
    };
  }
  onSend() {
    
  }

  render() {

    return (
        <Card style={{ alignItems:"center",borderRadius:"10px",marginTop:"10px",marginBottom:'10px' }}>
    <Card.Header style={{fontSize:"30px",width:'100%'}}>{this.props.item.name}</Card.Header>
  <ListGroup style={{textAlign:"start",fontSize:"20px",width:'100%'}} variant="flush">
  <ListGroup.Item style={{borderBottomWidth:"4px"}}></ListGroup.Item>
    {this.props.item.subject.map((subitem,subindex)=>{
      return(
        <ListGroup.Item style={{borderBottomWidth:"4px",alignItems:'center',textAlign:'center'}}>Subject :{subitem.name} Faculty :{subitem.takenBy} </ListGroup.Item>

      )
    })}
  </ListGroup>
</Card>
       
    );
  }
}


export default (EnrolledClassCard);
