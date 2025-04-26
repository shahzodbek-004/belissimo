import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialState);

  function saveCart(data) {
    setCart(data);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function addToCart(product) {
    const isExist = cart.some((item) => item.id === product.id);
    if (isExist) {
      saveCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      saveCart([...cart, { ...product, qty: 1 }]);
    }
  }
  function increaseQty(id) {
    saveCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }
  function decreaseQty(id) {
    saveCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
    );
  }
  function deleteToCart(id) {
    saveCart(cart.filter((item) => item.id !== id));
  }
  function getTotalPrice() {
    let sum = 0;
    for (let item of cart) {
      sum += item.price * item.qty;
    }
    return sum;
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQty,
        decreaseQty,
        deleteToCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
