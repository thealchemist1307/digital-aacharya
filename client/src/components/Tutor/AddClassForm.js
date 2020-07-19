import React from 'react';
import { Container , Col , Row } from 'react-bootstrap'
import Select from "react-select";
import TimePicker from 'react-times';
 
// use material theme
import 'react-times/css/material/default.css';
class AddClassForm extends React.Component {
  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
    constructor(props) {
        super(props);
        this.state = {
            time:"12:00pm"
        };
        
    }
    customStyles = {
      container: provided => ({
        ...provided,
        display: "inline-block",
        width: "250px",
        minHeight: "1px",
        textAlign: "left",
        border: "none"
      }),
      control: provided => ({
        ...provided,
        border: "2px solid #757575",
        borderRadius: "10px",
        minHeight: "1px",
        height: "40px",
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
      
      this.setState({time:options.hour + options.minute+options.meridiem})
      console.log(this.state.time)
    }
    render() {
      return (
        <div >
          
        <form onSubmit={this.handleSubmit}>
        <div>
        <label style={styles.subject}>Subject :</label>
        <Select styles={this.customStyles} options={this.options}
              isSearchable={true}
            />
         
         </div>
        <div>
        <label style={styles.fees}>
          Fees    :</label>
          <input type="text" style={{paddingRight:"20px",width:'250px',height:"40px"}} value={this.state.value} onChange={this.handleChange} />
        
        </div>
        <div style={{width:"300px",}}><label>Class Time :</label> <TimePicker
   
    onTimeChange={this.onTimeChange.bind(this)}    
    customStyles
    time={this.state.time} // initial time, default current time
    theme="material"
    timeMode="12" // use 24 or 12 hours mode, default 24
      />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  
      );
    }
  }
  
  const styles={
      subject:{paddingRight:"10px",
            fontSize:"30px"},
      
      fees:{paddingRight:"10px",
            fontSize:"30px",
              },
    
    }
  export default AddClassForm;