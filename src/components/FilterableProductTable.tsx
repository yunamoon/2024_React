import Product from "../types/Product";
import ProductTable from "./ProductTable";
import SearchBar from "./SearcBar";

type FilterableProductTableProps = {
    products : Product[];
}
export default function FilterableProductTable({products} :FilterableProductTableProps) {
    return (
        <div>
       <SearchBar/>
      <ProductTable products={products}/>
      </div>
    )
}