import React,{useRef} from "react";

const Refuse=()=>{

    const inputRef=useRef(null);


    const onClick=()=>{
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.value="";


    }
    return(
        <div>
            <h1>Anil</h1>
            <input type="text" placeholder="Ex.." ref={inputRef}/>
            <button onClick={onClick}>Change name</button>
        </div>
    )
    }

export default Refuse;