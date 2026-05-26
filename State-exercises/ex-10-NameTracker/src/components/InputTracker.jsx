import {useState,useEffect} from "react"

const InputTracker = ()=>{
    const [name,setName] = useState("")
    useEffect(()=>{
        console.log("Name changed")
    },[name])
    return(
        <>
        <input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)} />
        </>
    )

}
export {InputTracker}