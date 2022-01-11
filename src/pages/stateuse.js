import React, { useState } from "react";

const Use = () => {
//change the counter value
  const [counter, setcounter] = useState(0);

  //eslint-disable-next-line
   const[inputValue, setInputvalue]=useState("pedro");


  const increment = () => {
    setcounter(counter + 1);
  };

const Decrement =()=>{
    if(counter>0){
    setcounter(counter-1)
}}

let onChange=(event)=>{
  const newValue= event.target.value;
setInputvalue(newValue);
};



  return (
      <>
    <div>
        <div>{counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={()=>setcounter(counter*0)}>Reset</button>
      {/*<button onClick={()=>setcounter(counter+1)}>
    Increment
    </button>*/}
    </div><br/><br/>




    <div>
        <input placeholder="enter something"onChange={onChange}/>
        {inputValue}
    </div>
    </>
  );
};

export default Use;
