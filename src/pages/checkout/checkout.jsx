import CheckoutItem from "../checkout-item/checkout-item"
import "./checkout.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/cartContext"


const Checkout = () => {
    const {currentCart} = useContext(CartContext)

    const [totalBuy, setTotalBuy] = useState(0)
     
    useEffect(() => {
       let temporalBuy = 0
       currentCart.forEach(element => {
            temporalBuy = (element.quantity * element.price) + temporalBuy
       });
       setTotalBuy(temporalBuy)
    }, [currentCart])
     

    return (
        <div className="checkout-container" >
            <div className="checkout-header" >
                
                <div className="header-block">
                    <span>product</span>
                </div>
                
                <div className="header-block">
                    <span>description</span>
                </div>
                
                <div className="header-block">
                    <span>quantity</span>
                </div>
                
                <div className="header-block">
                    <span>price</span>
                </div>
                
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>

                
                {currentCart.map((product) => {
                    return(
                    <CheckoutItem key={product.id} product={product}/>)
                })}

            <div className="total">{`Total: ${totalBuy}€`}</div>

        </div>
    )
}
export default Checkout;

