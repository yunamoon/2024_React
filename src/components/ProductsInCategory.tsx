import Product from "../types/Product";
import selectProducts from "../utils/selectProducts";
import CategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type ProductsInCategoryProps  = {
  category: string;
  products : Product[];
}


export default function ProductsInCategory({
  category, products
}: ProductsInCategoryProps) {
  const productsInCategory =selectProducts(products, category);
  return (
    <>
    <CategoryRow category={category}/>
    {productsInCategory.map((product) =>(
    <ProductRow key={product.name} product={product}/>
   ))}
   </>
  )
}