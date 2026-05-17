import {Button} from './Button';

function ProductCard({product}){ 
    return(
        <>
        <h2 className = "title">{product['title']}</h2>
        <h3 className = "price">{product['price']}</h3>
        <h3 className = "brand">{product['brand']}</h3>
        <img src = {product['image']} alt = "This is image" className = "product-avatar"/>
        <Button text = {product['button']}/> 
        </>
    )
}
export {ProductCard};