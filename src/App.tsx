import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearcBar';
import Product from './types/Product';


const products : Product[] =  
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


function App() {



  return (
    <div className="App">
      <FilterableProductTable products={products}/>
    </div>
  );
}

export default App;
