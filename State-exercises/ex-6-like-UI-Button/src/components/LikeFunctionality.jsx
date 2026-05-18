import {useState} from "react";
const LikeFunctionality = ()=>{
    const [liked,setLiked] = useState(false);
    return(
    <>
    <button onClick = {()=>setLiked(!liked)}>{liked?"Liked ❤️":"Like"} </button>
    </>
    )
}
export {LikeFunctionality};