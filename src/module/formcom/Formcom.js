import React, { Component, PureComponent } from 'react';
import {FormStyle} from './style';
import Slavecom from '../slavecom';
import {ShowProps} from './btn'


class CounterDemo extends Component{
    constructor(props){
      super(props);
      this.state={
        fullname:'Jaun Elia',
        email:'jaunelia@gmail.com',
        date:'08-11-2002',
        counter:0,
      }
    }

   handleChange=(e)=> {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
 
    increment= ()=> {
      this.setState({
        counter:this.state.counter+1
      });
    }

    decrement= ()=> {
      this.setState({
        counter:this.state.counter-1
      });
    }

    render(){
     
        return(<div>
               <FormStyle className="CardList">
                <form className="formBox">
                   <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange}  />
                   <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                   <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
                </form>
                 <div className="btnGroup">
                  <button onClick={this.increment}>Increment</button>
                  <button onClick={this.decrement}>Decrement</button>
                </div>
              </FormStyle>
               <Slavecom { ...this.state}/>
            </div>
              )
         }
}

export default CounterDemo;