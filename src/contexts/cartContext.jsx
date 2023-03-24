import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState([]);

  const existProductCart = (product) => {
    const result = currentCart.find((productCart) => {
      return productCart.id === product.id;
    });
    return result;
  };

  const addItemToCart = (product) => {
    let newCurrentCart = [];

    if (!existProductCart(product)) {
      newCurrentCart = [...currentCart, { ...product, quantity: 1 }];
    } else {
      newCurrentCart = currentCart.map((productCart) => {
        if (productCart.id === product.id) {
          return { ...productCart, quantity: productCart.quantity + 1 };
        } else {
          return productCart;
        }
      });
    }
    setCurrentCart(newCurrentCart);
  };

  const values = {
    currentCart,
    setCurrentCart,
    addItemToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
