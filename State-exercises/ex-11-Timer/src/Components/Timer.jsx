import {useState,useEffect} from "react"
const Timer = ()=>{
    const [number,setNumber] = useState(0);
    useEffect(()=>{
         const intervalId = setInterval(()=>{   
            setNumber((number)=>number+1);
        },1000)
    },[])
return(
    <>
    <h1>Timer:{number}</h1>
    
    </>
)
}
export {Timer}