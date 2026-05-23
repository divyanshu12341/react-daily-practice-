import {ProductCard} from './components/ProductCard';
import {ProfileCart} from './components/ProfileCart'
import { CiShoppingCart } from "react-icons/ci";
import {useState} from 'react';
import './App.css';

const App = () =>{
  const [cartTotal,setCartTotal] = useState(0);

  function handleAddToCart(price){
    return setCartTotal(prev=>prev+price)
  }
  function handleRemoveFromCart(price){
    return setCartTotal(prev=>prev-price);
  }
  return (
    <div className="app-container">
      <ProfileCart price = {cartTotal} updateCart = {setCartTotal}/>   
      <div className="cards-grid">
        <ProductCard name = "iphone 15 pro" price = {10000} onAddToCart = {handleAddToCart} onRemoveFromCart = {handleRemoveFromCart} />
        <ProductCard name = "Samsung S25 Ultra" price = {10000} onAddToCart = {handleAddToCart} onRemoveFromCart = {handleRemoveFromCart}  />
        <ProductCard name = "Samsung S25 Plus" price = {50000} onAddToCart = {handleAddToCart} onRemoveFromCart = {handleRemoveFromCart}   />
        <ProductCard name = "Samsung S25" price = {60000} onAddToCart = {handleAddToCart} onRemoveFromCart = {handleRemoveFromCart}/>
      </div>
    </div>
  )
}
export default App;