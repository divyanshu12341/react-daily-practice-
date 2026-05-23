import './ProductCard.css';
import {useState} from 'react';
const ProductCard = ({name,price,onAddToCart,onRemoveFromCart})=>{
    const [quantity,setQuantity] = useState(0);
    const cartText = (quantity == 0 ?'Add to cart':quantity);
    const totalPrice = price*quantity;
    function increaseQuantity(){
        setQuantity((prev)=>prev+1);
        onAddToCart(price);
    }
    function decreaseQuantity(){
        if(quantity>0){
        setQuantity((prev)=>prev-1);
        onRemoveFromCart(price);
        }
    }
    return(
        <>
        <div className = "card">
        <ul>
            <li>{name}</li>
            <li>{price}</li>
        </ul>
        <div className = 'quantity-controls'>
            <button className = 'quantity-btn' onClick = {increaseQuantity}>+</button>
            <span className = 'quantity-display'>{quantity}</span>
            <button className = 'quantity-btn' onClick = {decreaseQuantity}>−</button>
        </div>
        <button className = 'buy-now'>Buy now</button>
        </div>
        
        </>
    )
}
export {ProductCard};