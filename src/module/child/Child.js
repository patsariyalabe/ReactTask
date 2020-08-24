import React, { Component } from 'react';
import {Detailsinfo} from './style';
//import Parent from './parent';
export class childClass extends Component{
 
    render(){
        return( <Detailsinfo className="Detail">
                <h4>{this.props.fullname}</h4>
                <h4>{this.props.email}</h4>
                <h4>{this.props.password}</h4>
                <h4>{this.props.counter}</h4>
              </Detailsinfo>)
    }
}

export default childClass;