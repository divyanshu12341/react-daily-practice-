import {ProductCard} from './components/ProductCard';
import './App.css';

const App = () =>{
  return (
    <div className="app-container">
      <div className="cards-grid">
        <ProductCard name = "iphone 15 pro" price = "1 Lakh"/>
        <ProductCard name = "Samsung S25 Ultra" price = "1 Lakh" />
        <ProductCard name = "Samsung S25 Plus" price = "50 Thousand" />
        <ProductCard name = "Samsung S25" price = "60 Thousand" />
      </div>
    </div>
  )
}
export default App;