import { Link } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import "./category-preview.css"

const CategoryPreview = ({title, productList}) => {
    // console.log(productList);
    return (
        <div className="category-preview-container" >
            <h2>
                <Link to={`/shop/${title}`}>
                    {title.toUpperCase() }
                </Link>
             </h2>
            <div className="preview">
               {productList.map((product, index) => {
                if(index < 4){ //muestra solo los 4 primeros 
                    return(
                        <ProductCard key={product.id} product={product}/>
                    )
                }
               })} 
            </div>
        </div>
    )
}
export default CategoryPreview;