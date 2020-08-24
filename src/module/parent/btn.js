import React, { Component } from 'react';
export class ShowProps extends Component{
    render(){
    return(
       <div>
         <h1>{this.props.fullname}</h1>
         <h1>{this.props.email}</h1>
         <h1>{this.props.date}</h1>
       </div>
   )
    }
}