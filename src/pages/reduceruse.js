import React, { useState ,useReducer} from "react";

const reduce =(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1,showtext:state.showtext}
        
        case "toggleShowtext":
            return {count:state.count,showtext:!state.showtext}
    
        default:
            return state;    
        }
}

const Reducer = () => {
  //using useState
    const [count, setCount] = useState(0);
    const [showtext, setShowtext] = useState(true);

// using useReducer
    const[state,dispatch]=useReducer(reduce,
        {count:0,showtext:true})

  return (
  <>

  <div> Using usestate
      <h1>{count}</h1>
      <button onClick={()=>{
            setCount(count+1);
            setShowtext(!showtext);
    
      }}>
          Click Here
      </button>
      {showtext && <p>this is Text</p>}
  </div><br/><br/>

    <div> Using useReducer
    <h1>{state.count}</h1>
      <button onClick={()=>{
           dispatch({type:"INCREMENT"})
           dispatch({type:"toggleShowtext"})
    
      }}>
          Click Here
      </button>
      {state.showtext && <p>this is Text</p>}
 
    </div>
  </>
  )};

export default Reducer;
