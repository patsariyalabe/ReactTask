import React, { Component, PureComponent } from 'react';
import {FormStyle} from './style';
import Child from '../child';
import {ShowProps} from './btn'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class CounterDemo extends Component{
    constructor(props){
      super(props);
      this.state={
        fullname:'Jaun Elia',
        email:'jaunelia@gmail.com',
        password:'jaunelia@123',
        counter:0,
       errors: {
          fullname: '',
          email: '',
          password: '',
        }
      }
    }

   handleChange=(e)=> {
    e.preventDefault();
       const { name, value } = e.target;
       let errors = this.state.errors;
       switch(name)
        {
          case 'fullname':
           errors.fullname =
           value.length<5 
           ? 'Full Name must be 5 characters long!'
           : '';
          break;
          case 'email':
           errors.email =
           validEmailRegex.test(value)
           ? ''
           :'Email is not valid';
          break;
          case 'password':
           errors.password =
           value.length<8 
           ? 'Password must be 8 characters long!'
           : ''
          break;
          default:
          break;
        }
          this.setState({[name]: value});
      }
 
    increment= ()=> {this.setState({counter:this.state.counter+1})}
    decrement= ()=> {
      this.state.counter!=0 
      ? this.setState({counter:this.state.counter-1}) 
      : alert("Negative Value Not allowed")
     }
   
    render(){
      const errors= this.state.errors;
     
        return(<div>
                <FormStyle className="CardList">
                <form className="formBox">
                   <div className="form-group">
                     <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} noValidate />
                     {errors.fullname.length >  0 && 
                     <span className='error'>{errors.fullname}</span>}
                   </div>
                   <div className="form-group">
                     <input type="email" name="email" value={this.state.email} onChange={this.handleChange} noValidate/>
                     {errors.email.length > 0 && 
                      <span className='error'>{errors.email}</span>}
                   </div>
                   <div className="form-group">
                     <input type="password" name="password" value={this.state.password} onChange={this.handleChange} noValidate />
                     {errors.password.length > 0 && 
                      <span className='error'>{errors.password}</span>}
                   </div>
                   <div className="form-group">
                    <button type="submit" disabled>Submit</button>
                   </div>
                </form>
                 <div className="btnGroup">
                  <button type="button" onClick={this.increment}>Increment</button>
                  <button type="button" onClick={this.decrement}>Decrement</button>
               </div>
              </FormStyle>
               <Child { ...this.state}/>
            </div>
              )
         }
}

export default CounterDemo;