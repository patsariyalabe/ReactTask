import React from 'react';
import {Header2,Footer,Sidebar} from './component';
//import Home from './module/home';

import Formcom from './module/formcom';
import Slavecom from './module/slavecom';
import logo from './logo.svg';
import './App.css';



var App = () => {
  return (<div className="Wrapper">
     <Formcom/> 
     {/* <Slavecom/>  */}
     {/* <Header2/>
    <main className="mainContent">
    <Sidebar/>
    <Home/>
    </main>
     <Footer/> */}
     </div>);
}


export default App;
