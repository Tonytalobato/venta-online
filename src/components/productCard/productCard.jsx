import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import Button from "../button/button"
import "./productCard.css"

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)
    return (

        <div className="product-card-container" >
            <img src={product.imageUrl} alt={product.name} />
            <div className="footer" >

                <span className="name" >{product.name}</span>
                <span className="price" >{product.price}</span>

            </div>
                
                <Button buttonText="Add to cart" onClick={() => addItemToCart(product)} buttonClass="inverted" />

        </div>

    )
}

export default ProductCard;