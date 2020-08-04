import React, { Component } from 'react';
import {CardList,CardCol} from './style'

class learnState extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'Create state'
    }
  }
  // componentWillMount(){
  //   console.log("componentWillMount() Run");
  // }
  componentDidMount(){
    this.changeData();
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate() Run");
    return true;
  }
  changeData(){
    //setTimeout(() =>{
   this.setState((props) => ({
      name:'Set State'
    }));
 // },1000)
  }
 
  render(){
    const { name } = this.state
    console.log("Render Data",name);
    return(<CardList className="CardList">
            <CardCol className="CardCol">Ex:-{name}</CardCol>
            <CardCol className="CardCol">Ex:-{name}</CardCol>
            <CardCol className="CardCol">Ex:-{name}</CardCol>
            <CardCol className="CardCol">Ex:-{name}</CardCol>
          </CardList>)
     }

    }
// var Home = () => {

//   return(<div className="CardList">
//          <div className="cardCol"></div>
//          <div className="cardCol"></div>
//          <div className="cardCol"></div>
//           <div className="cardCol"></div>
//       </div>
//   )
// }





export default learnState;

