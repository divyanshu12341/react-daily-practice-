import {useState} from 'react';
const CharacterCounter = ()=>{
    const [text,setText] = useState(" ");
    const [count,setCount] = useState(0)
    return(
        <>
    <input type = "text" value = {text} onChange = {(e)=>setText(e.target.value)} />
    <h2> Characters: {text.length}</h2>
    </>
    )
}
export {CharacterCounter};