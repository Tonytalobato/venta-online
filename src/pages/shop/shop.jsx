import CategoryPreview from "../../components/category-preview/category-preview";
import ProductCard from "../../components/productCard/productCard";
import productData from "../../product.json"
import "./shop.css"

const Shop = () => {
  const categories = Object.keys(productData) 
    return (
    <div className="products-container">
      {
      categories.map((category) => {
        return(
          <CategoryPreview key={category} title={category} productList={productData[category]} />
        )
      })
      }
       {/* {
        productData.map((product) => {
         return (
          <ProductCard key={product.id} product={product} />
          ) 
        })
       }  */}
    </div>
    )
}
export default Shop;