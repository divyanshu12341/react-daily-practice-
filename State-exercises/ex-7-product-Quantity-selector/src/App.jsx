import {ProductQuantitySelector} from "./components/ProductQuantitySelector";
const App = ()=>{
  return(
    <>
        <h1>Quantity Selector</h1>

    <ProductQuantitySelector OrderItem = "One plus nord ce 6 lite" />
    <ProductQuantitySelector OrderItem = "One plus nord ce " />
    <ProductQuantitySelector OrderItem = "One Plus Nord CE 5" />
    </>
  )
}
export default App;