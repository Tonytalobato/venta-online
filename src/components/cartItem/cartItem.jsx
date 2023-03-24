import "./cartItem.css"

const CartItem = ({product}) => {
  return (
<div className="cart-item-container">
        <img src={product.imageUrl} alt={product.name} />
            <div className="item-details">
            
            <span className="name" >{product.name}</span>

            <span className="price">{ `${product.quantity} x ${product.price}` }</span>
            </div>
        </div>
  )
}



export default CartItem;