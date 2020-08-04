import React from 'react';
import ReactDom from 'react-dom';


class Demo extends React.Component { 
  constructor(props) 
  { 
      super(props); 
      this.state = { name : "Employee Name!" }; 
  } 


  changeState() 
  { 
      this.setState({ name : "Lov Patsariya" }); 
  } 

  render() 
  { 
      return ( 
          <div className="box"> 
           <div class="w-100">
             <h1>Successive Technology</h1>
             <h2>{ this.state.name }</h2> 
             <a onClick={this.changeState.bind(this)}>Click Here To Know The Employee Name</a> 
           </div>
         </div>); 
  }
  
  }




export default Demo;

