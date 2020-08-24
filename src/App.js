import React from 'react';
import {Header2,Footer,Sidebar} from './component';
//import Home from './module/home';
// import { BrowserRouter, Router, Route, Switch,Link  } from 'react-router-dom';
// import Parent from './module/parent';
// import Child from './module/child';
// import Home from './module/home';
// import Signup from './module/signup';
// import Header from './component/header';
import PostList from './PostList';
import Todolist from './module/todolist';
import logo from './logo.svg';
import './App.css';



var App = () => {
  return (<div className="Wrapper">
            <Todolist/>
              {/* <Signup/> */}
             {/* <Switch>
                <Route path="/" component={Parent} exact />
                <Route path="/child" component={Child} />
                <Route component={Error} />
            </Switch>
              <Link to="/">Parent </Link>
              <Link to="/child">Child</Link> */}
          </div>);
}


export default App;
