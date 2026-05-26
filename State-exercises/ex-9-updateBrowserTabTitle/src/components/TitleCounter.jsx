import {useState,useEffect} from "react"
const TitleCounter = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
          document.title = count
    },[count])
    const incrementCount = ()=>{
        setCount(count+1);
    }
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick = {incrementCount}>Increment</button>
        </>
    )
}
export {TitleCounter}