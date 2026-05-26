import {useEffect} from "react";
const PageLogger = ()=>{
      useEffect(()=>{
        console.log("CM")
      },[])
    return(
        <>
        <h1>Learning use effect</h1>
      
        </>
    )
}
export {PageLogger}