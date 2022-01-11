import React,{useLayoutEffect,useEffect,useRef} from "react";


const Effectlayout =()=>{

    const inputRef=useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);

    useEffect(()=>{
        inputRef.current.value="HELLO";
    },[]);


return(

    <div className="App">
        <input ref={inputRef} value="Anil" Style="widht:400, height:500" />
    </div>


)
}
export default Effectlayout;