import {Avatar} from './Avatar'
import {UserInfo} from './UserInfo'
function UserCard({avatar,name,role,city}){
    return(
        <>
        <Avatar avatar = {avatar}/>
        <UserInfo name = {name} role = {role} city = {city} /> 
        
        </>
    )
}
export {UserCard};