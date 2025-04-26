import { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../../../context/CartContext";

function CartContent() {
  const { cart , getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-wrapper">
      <div className="cart-left">
        <div className="cart-products">
          {cart.map((item) => (
            <CartProduct key={item.id} product={item} />
          ))}
        </div>
      </div>
      <div className="cart-right">
        <div className="cart-summary">
          <div className="cart-info">
            <div className="cart-summary__row">
              <p>Yetkazib berish</p>
              <p>Bepul</p>
            </div>
            <div className="cart-summary__row">
              <h4>Umumiy narx</h4>
              <h4>{getTotalPrice} so'm</h4>
            </div>
          </div>
          <button className="cart-button">Keyingisi</button>
        </div>
      </div>
    </div>
  );
}

export default CartContent;
