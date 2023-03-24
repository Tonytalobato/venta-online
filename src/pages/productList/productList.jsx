import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/productCard";
import productList from "../../product.json"
import "./productList.css"


const ProductList = () => {
    const {category} = useParams()
    return (
        <>
            <h2 className="category-title">
                {category.toUpperCase()}
            </h2>
            <div className="category-containers">
                {productList[category].map((product) => {//muestra todos los productos por categoría
                    return(
                        <ProductCard key={product.id} product={product}/>
                    )
                })}  
            </div>
        </>
    )
}
export default ProductList;