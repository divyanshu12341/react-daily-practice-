import "./ProfileCart.css"
import {useState} from "react"
const ProfileCart = ({price}) =>{
    const [quantity, setQuantity] = useState(0);
    console.log('setCart is ',price)
    return(
        <>
        <div className="profile-cart">
            <div className="profile-cart-header">Cart Total</div>
            <div className="profile-cart-price">{price}rs</div>
            
            <div className="profile-cart-footer">Items in cart</div>
        </div>
        </>
    )
}
export {ProfileCart}