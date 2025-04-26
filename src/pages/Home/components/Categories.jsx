import { products } from "../../../constants/data";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
function HomeCategories() {

  const{cart} = useContext(CartContext);
  return (
    <section className="categories">
      <div className="container categories-row">
        <div className="categories-column">
          <div className="categories-logo">
            <img src="/images/logo-icon.webp" alt="logo icon" />
          </div>
          <div className="categories-list">
            {products.map((item) => (
              <Link
                activeClass="active"
                className="categories-button"
                spy={true}
                smooth={true}
                to={item.id}
              >
                {item.translations.title.uz}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/cart">
          <button className="categories-cart__button">Savatcha | {cart.length} </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeCategories;
