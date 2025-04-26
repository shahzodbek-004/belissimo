import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="cart-empty">
      <h1>Hozircha sizning savatchangiz boʻsh 😕</h1>

      <Link to="/">
        <button className="cart-empty__button">Menyuni ko'rish</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
