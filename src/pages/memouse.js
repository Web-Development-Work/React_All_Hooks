import { useEffect, useState,useMemo } from "react";
import axios from 'axios';


function Memouse(){

    const [data,setData]=useState(null);
    const [toggle, setToggle]=useState(false);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((Response)=>{
            setData(Response.data);
        });
    },[]);


    const findLongestName=(comments)=>{
        if(!comments) return null;

        let longestName="";
        for(let i=0;i<comments.length;i++){
            let currentName=comments[i].name;
            if(currentName.length>longestName.length){
                longestName=currentName;
            }
        }

        console.log("This was Computed");
        return longestName;
    };

const getLongestName=useMemo(()=>findLongestName(data),[data])


    return(
        <div className="momouse">
                 {/* render eerey tym*/}
            <div>{findLongestName(data)}</div><br/>
            
            
            {/* render only single tym */}
            <div>{getLongestName}</div>
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
export default Memouse;