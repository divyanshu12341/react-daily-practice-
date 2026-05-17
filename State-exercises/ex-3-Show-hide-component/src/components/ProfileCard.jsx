import {useState} from "react";
const ProfileCard = ({name,role})=>{
    return(
        <>
        <h1>Name is {name}</h1>
        <h2>Role is {role}</h2>
        </>
    )
}
export {ProfileCard}