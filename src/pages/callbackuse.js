import {useCallback, useState} from "react";
//import axios from 'axios';
import Child from "./Child";

function Callback(){

    const [data,setData]=useState("Anil Patidar");
    const [toggle, setToggle]=useState(false);

    const returnComment=useCallback((name)=>{
        return data+name;
        },[]);
    return(
        <div className="momouse">
            <Child returnComment={returnComment}/>
            <button onClick={()=>{
                setToggle(!toggle);
            }}> 
                {" "}
                Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    )

   
}
export default Callback;