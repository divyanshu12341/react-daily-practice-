import {useState} from "react";
const Toggle = ()=>{
    const [ShowOldText,setShowOldText] = useState(true);
    const oldText = "Hello ";
    const newText = "Hi whats'up";
    const showText = ShowOldText?oldText:newText
    return(
        <>
        <h1>{showText}</h1>
        <button onClick = {()=>setShowOldText(!ShowOldText)}>Toggle</button>
        </>
    )
}
export default Toggle