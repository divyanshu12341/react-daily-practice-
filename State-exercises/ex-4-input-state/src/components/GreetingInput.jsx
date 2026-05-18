import {useState} from "react";
const GreetingInput = () =>{
    const [name,setName] = useState("");
    return(
        <>
        <input onChange = {(e)=>setName(e.target.value)} type = "text" value = {name} />
        <h1>Hello {name}</h1>
        </>
    )
}
export {GreetingInput}