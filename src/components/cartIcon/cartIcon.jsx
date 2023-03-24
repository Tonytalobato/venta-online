import { useContext, useEffect, useState } from "react";
import { ReactComponent as LogoCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cartContext";
import "./cartIcon.css";

const CartIcon = ({ onClickIcon }) => {
  const [articleTotal, setArticleTotal] = useState(0);
  const { currentCart } = useContext(CartContext);

  useEffect(() => {
    let temporalQuantity = 0;
    currentCart.forEach((element) => {
      temporalQuantity = temporalQuantity + element.quantity;
    });
    setArticleTotal(temporalQuantity);
  }, [currentCart]); //si está vacío se ejecuta solo una vez

  return (
    <div onClick={onClickIcon} className="cart-icon-container">
      <LogoCart className="shopping-icon" />
      <span className="item-count"> {articleTotal} </span>
    </div>
  );
};

export default CartIcon;
