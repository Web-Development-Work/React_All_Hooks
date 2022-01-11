import React, {forwardRef,useImperativeHandle,useState} from "react";

const Btns =forwardRef((props,ref)=>{
    
   const [toggle,setToggle]=useState(false);
   
   useImperativeHandle( ref,()=>({
    alterToggle()
    {
        setToggle(!toggle);
    }
}));
    


return(
        <>
        <button onClick={()=>{
            setToggle(!toggle);
        }
        }>
            Button From Child
        </button>
        {toggle && <span>Toggle</span>}
        </>
    )
});


export default Btns;