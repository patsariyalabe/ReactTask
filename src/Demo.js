import React from 'react';
import ReactDom from 'react-dom';
import data from './data.json'

class Demo extends React.Component { 
  constructor(props) 
  { 
      super(props); 
     
  } 




  render() 
  { 
      return ( 
        <div>
        {data.map((postData,index) => {
          console.log(postData);
          return (
            <div key={index}>
              <img  src={postData.image} />
              <div>
                <h2>
                  {postData.title}
                </h2>
                <h6>
                  {postData.tag + " "}
                </h6>

                <p>
                  {postData.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      )
  
  }

}


export default Demo;

