import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./components/EmptyCart";
import CartContent from "./components/CartContent";

function CartPage() {
  const { cart } = useContext(CartContext);

  console.log(cart)
  return (
    <section className="cartpage container">
      {cart.length <= 0 ? <EmptyCart /> : <CartContent />}
    </section>
  );
}
export default CartPage;
