import Button from "../button/button"
import "./cartDropDown.css"
import productData from "../../product.json"
import CartItem from "../cartItem/cartItem"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"

const CartDropDown = () => {
    const navigate = useNavigate();//si comienza con "use" es un hook
    const {currentCart} = useContext(CartContext)
    // console.log(currentCart);
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-items" >
            {
                currentCart.map((product) => {
            return (
                <CartItem key={product.id} product={product} />
            )})
            }
            </div>
                <Button onClick={() => navigate("/checkout")} buttonText="Go to checkout"/>
        </div>
    )
}
export default CartDropDown