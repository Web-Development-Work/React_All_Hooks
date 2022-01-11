import React,{useRef} from "react";
import Btns from "./Buttons";

function Imperativehandle(){
    const buttonref=useRef(null);
    return(
        <div>
            <button onClick={()=>{
                buttonref.current.alterToggle();
                }}>
                Button From Parents
            </button>
            <Btns ref={buttonref}/>
        </div> 
        )}
export default  Imperativehandle;