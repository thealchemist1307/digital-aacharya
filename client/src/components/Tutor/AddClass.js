import React from 'react';
import { Container , Col , Row } from 'react-bootstrap'
import AddClassForm from "./AddClassForm"
import EnrolledClass from "./EnrolledClass"
import axios from "axios"
class AddClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          requests:[],
          facultyMap:new Map(),
          TT:[]
        };
    }
    async componentDidMount()
    {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
     await axios
      .get("http://localhost:5000/api/addclass/get",{headers:headers})
      .then(res => {
        this.setState({requests:res.data});
      })
      .catch(error => {
        console.log(error);
        console.log("Add Class Error");
      });
     await this.populateMap()
    await  this.generate()
    }
    create2DArray=(row,col)=>{
      var arr=new Array(row)
      for(var i=0;i<col;i++)
      {
        const arr2=[0,0,0,0,0]
        arr.push(arr2)
      }
      return arr
    }
    populateMap=()=>{
      var facultyMap=this.state.facultyMap
      
      for(var i=1;i<8;i++)
      {
        facultyMap.set(("F"+i).toString(),new Map())
      }
      this.setState({facultyMap:facultyMap})
    }
    generate=()=>{
      const requests=this.state.requests
      var TT=new Array(requests.length)
      var facultyMap=this.state.facultyMap

      for(var i=0;i<requests.length;i++)
      {  var subjects=requests[i].subject
        var arr=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]

        for(var j=0;j<subjects.length;j++)
        {
          
          for(var m=0;m<3;m++)
          {
            var flag=0
          for(var l=0;l<7;l++)
          {
            for(var k=0;k<5;k++)
            {
              if((facultyMap.get(subjects[j].takenBy).has((k).toString()+(l).toString()))==false && arr[k][l]==0)
              {
                arr[k][l]=subjects[j].takenBy
                facultyMap.get(subjects[j].takenBy).set((k).toString()+(l).toString(),{sub:subjects[j].name,id:(k).toString()+(l).toString()})
                flag=1
                break
              }
            }
            if(flag==1)
            {
              break
            }
          }
        }
        }
        TT[i]=arr
      }
      this.setState({TT:TT,facultyMap:facultyMap})

    }




    render() {
      return (
        <div style={styles.div}>
          <Container fluid>
          <Row>
            <Col style={styles.enrolledCol}  ><EnrolledClass requests={this.state.requests} /></Col>
            {this.state.TT.length!=0 &&
            <Col style={styles.form}><AddClassForm TT={this.state.TT} facultyMap={this.state.facultyMap} /></Col>}
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