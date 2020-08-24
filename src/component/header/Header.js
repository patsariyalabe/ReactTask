import React from 'react';
import {HeaderStyle} from './style'

let menus = [
   {
     href:'/Home',
     mname:'Home'
   },
   {
    href:'/Blog',
    mname:'Blog'
  },
  {
    href:'/About',
    mname:'About Us'
  },
  {
    href:'Contact',
    mname:'Contact Us'
  }
]; 
  let MenuList = menus.map((menus)=>{ 
    return <li><a href={menus.href}>{menus.mname}</a></li>; 
});

var  Navs = () => {
  
    return (<HeaderStyle className="HeaderStyle">
      <nav>
       <a className="logo" href="#">Successive</a>
       <ul className="navMenu">
         {MenuList}
        </ul>
     
    </nav>
    </HeaderStyle>
    )
  }



export default Navs;