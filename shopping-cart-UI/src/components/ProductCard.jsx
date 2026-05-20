import './ProductCard.css';
import {useState} from 'react';
const ProductCard = ({name,price})=>{
    const [quantity,setQuantity] = useState(0);
    const cartText = (quantity == 0 ?'Add to cart':quantity);
    return(
        <>
        <div className = "card">
        <ul>
            <li>{name}</li>
            <li>{price}</li>
        </ul>
        <button className = 'cart-btn' onClick = {()=>setQuantity(quantity+1)}>{cartText}</button>
        <div className = 'quantity-controls'>
            <button className = 'quantity-btn' onClick = {()=>setQuantity(quantity+1)}>+</button>
            <span className = 'quantity-display'>{quantity}</span>
            <button className = 'quantity-btn' onClick = {()=>quantity>0?setQuantity(quantity-1):setQuantity(quantity)}>−</button>
        </div>
        <button className = 'buy-now'>Buy now</button>
        </div>
        </>
    )
}
export {ProductCard};