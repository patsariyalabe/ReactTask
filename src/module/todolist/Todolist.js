import React, {useState} from 'react';


const TodoBox =()=>{

    const[inputText, setInputText]=useState();
    const[items, setItems]=useState([]);
    const textChange=(e)=>{
        setInputText(e.target.value);
    }
  
    const addListitem=()=>{
        setItems((oldVal)=>{
            return [...oldVal,inputText]
        })
        setInputText("");
    }
  return(
       
           <div className="box">
              <div>
              <div className="addListBox">
                   <input type="text" placeholder="Add a Item" value={inputText} onChange={textChange}/>
                   <button type="button" onClick={addListitem}>Add</button>
               </div>
               <ul>
                   {
                     items.map((itemvalue)=>{
                        return <li>{itemvalue}</li>
                     })
                   }
               </ul>
              </div>
               
           </div>
           
      
    )
}

export default TodoBox;
