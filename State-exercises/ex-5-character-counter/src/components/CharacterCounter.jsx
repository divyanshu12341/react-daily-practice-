import {useState} from 'react';
const CharacterCounter = ()=>{
    const [text,setText] = useState(" ");
    return(
        <>
    <input type = "text" value = {text} onChange = {(e)=>setText(e.target.value)} />
    <h2> Characters: {text.length}</h2>
    </>
    )
}
export {CharacterCounter};