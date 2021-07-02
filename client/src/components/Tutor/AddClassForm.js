import React from 'react';

import Select from "react-select";
import TimePicker from 'react-times';
 import axios from "axios"
// use material theme
import 'react-times/css/material/default.css';
import { Container , Col , Row } from 'react-bootstrap'

class AddClassForm extends React.Component {
  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

    constructor(props) {
        super(props);
        this.state = {
            time:"12:00pm",
            subject:"",
            fees:"",
            id:0,
        };
        this.fromSelect = this.fromSelect.bind(this);
        this.handleFees=this.handleFees.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      
        
      }
    customStyles = {
      container: provided => ({
        ...provided,
        display: "inline-block",
        width: "300px",
        minHeight: "1px",
        height:"50px",
        textAlign: "left",
        border: "none"
      }),
      control: provided => ({
        ...provided,
        border: "2px solid #757575",
        borderRadius: "10px",
        minHeight: "1px",
        height: "50px",
      }),
      input: provided => ({
        ...provided,
        minHeight: "1px",
        height: "40px",
        marginLeft: "160px",
        background: "#fff"
      }),
      placeholder: provided => ({
        ...provided,
        marginTop: "0px"
      }),
      dropdownIndicator: provided => ({
        ...provided,
        minHeight: "1px",
        paddingTop: "0",
        paddingBottom: "0",
        color: "#757575"
      }),
      indicatorSeparator: provided => ({
        ...provided,
        minHeight: "1px",
        height: "24px"
      }),
      clearIndicator: provided => ({
        ...provided,
        minHeight: "1px"
      }),
      valueContainer: provided => ({
        ...provided,
        minHeight: "1px",
        height: "20px",
        paddingTop: "0",
        paddingBottom: "0"
      }),
      singleValue: provided => ({
        ...provided,
        minHeight: "1px",
        paddingTop: "8px",
        fontSize:"20px"
        
      })
    };
    onTimeChange(options) {
      
      this.setState({time:options.hour +":"+ options.minute+" "+options.meridiem})
      
    }
    handleFees(event){
      
      this.setState({fees:event.target.value})
      
    }

    fromSelect(event) {
      
      this.setState({subject:event.label})
      
    }
    handleSubmit(){

    }
    renderFac=()=>{
      const facultyMap=this.props.facultyMap
      const fac=Array.from(facultyMap.keys())
      var data =new Array()
      for(var i=0;i<fac.length;i++)
      {   var tt=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
          var temp=facultyMap.get(fac[i])
          for(var l=0;l<7;l++)
          {
            for(var k=0;k<5;k++)
            {
              if(temp.has((k).toString()+(l).toString()))
              {
                tt[k][l]=temp.get((k).toString()+(l).toString()).sub
              }
            }
          }
          data.push(tt)
        }
        return(
          data.map((it,val)=>{
            return(
              <Container key={val} style={{borderWidth:"2px",borderStyle:'solid',borderColor:'black'}}>
             { it.map((item,index)=>{
              return(
                <Row key={index}>
                  {item.map((value,ind)=>{
                    return(
                      <Col key={ind}>
                      <h7>
                      {value}
                      </h7>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
            </Container>
            
            )
    
    
          })
          )
    }
    renderTT=()=>{

      const data=this.props.TT[0]
      console.log(data)
      return(
      this.props.TT.map((it,val)=>{
        return(
          <Container key={val} style={{borderWidth:"2px",borderStyle:'solid',borderColor:'black'}}>
         { it.map((item,index)=>{
          return(
            <Row key={index}>
              {item.map((value,ind)=>{
                return(
                  <Col key={ind}>
                  <h5>
                  {value}
                  </h5>
                  </Col>
                )
              })}
            </Row>
          )
        })}
        </Container>
        
        )


      })
      )
    }
    render() {
      return (
        <div style={{height:"100%",overflowY:'scroll'}}>
        {this.renderFac()}
        </div>
      );
    }
  }
  
  const styles={
      subject:{paddingRight:"50px",
            fontSize:"30px"},
      
      fees:{paddingRight:"85px",
            fontSize:"30px",
              },
    
    }
  export default AddClassForm;