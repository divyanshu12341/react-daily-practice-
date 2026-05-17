import {useState} from "react";
import {ProfileCard} from "./ProfileCard";
const ShowOrHideProfile = ({name,role})=>{
    const [Show,SetShow] = useState(true);
    const profile = Show?<ProfileCard name = {name} role = {role} />:null;
    let viewProfile = "view profile"
    if(Show){
         viewProfile = "hide profile";
    } else {
        viewProfile = "view profile";
    }
    return(
        <>
            {profile}
            <button onClick = {()=>SetShow(!Show)}>{viewProfile}</button>

        </>
    )
}
export {ShowOrHideProfile};
