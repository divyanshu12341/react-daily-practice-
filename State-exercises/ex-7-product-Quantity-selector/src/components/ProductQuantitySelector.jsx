import {useState} from "react";
import "./ProductQuantitySelector.css"
const ProductQuantitySelector = ({OrderItem})=>{
    const [Quantity,setQuantity] = useState(1)
    return(
        <>
        <div className = "container">
    <button onClick = {()=>setQuantity(Quantity+1)} className = "plusBtn">+</button>
    {OrderItem} -- {Quantity}
    <button onClick = {()=>Quantity>=1?setQuantity(Quantity-1):setQuantity(Quantity)}>-</button>
       </div>
    </>
    )
}

export {ProductQuantitySelector}