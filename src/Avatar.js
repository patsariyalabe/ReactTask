import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Avatar extends Component{
    constructor(){
        super();
    }
render(){
    const arrayList=[
     {
       id:1,
       name:"Lov Patsariya",
       work:"Software Engineer"
     },
     {
         id:2,
         name:"kush patsariya",
         work:"Farmer"
     },
     {
         id:3,
         name:"Shikha Patsariya",
         work:"Housewife"
     },
     {
         id:4,
         name:"Ramji Patsariya",
         work:"Sarpanch"
     }
];

const avatarList=(props)=>{
<div className="col">
 <div className="avatar">
 <figure><img src={'https://joeschmoe.io/api/v1/${props.name}'} alt="Avatar"/></figure>
<h2>{props.name}</h2>
<p>{props.work}</p>
            </div>
</div>
}

return(
<div className="row">{avatarList}</div>
)

}

}



export default Avatar;