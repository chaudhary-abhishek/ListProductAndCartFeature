import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    item.quantity++;
    const itemAlreadyInCart = cart.filter(({ id }) => item.id === id);
    itemAlreadyInCart.length === 0
      ? setCart((cart) => [...cart, item])
      : setCart((cart) => [...cart]);
  }

  function removeFromCart(item) {
    item.quantity = 0;
    setCart((cart) => cart.filter((currentItem) => currentItem.id !== item.id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
