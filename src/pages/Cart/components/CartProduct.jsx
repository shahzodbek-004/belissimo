import { useContext } from "react";
import { capacityOptions, sizeOptions } from "../../../constants/data";
import Counter from "./../../../components/Counter";
import { CartContext } from "../../../context/CartContext";

function CartProduct({ product }) {
  const { increaseQty, decreaseQty, deleteToCart } = useContext(CartContext);
  const handleIncrease = () => {
    increaseQty(product.id);
  };

  const handleDecrease = () => {
    if (product.qty <= 1) {
      deleteToCart(product.id);
    } else {
      decreaseQty(product.id);
    }
  };
  return (
    <div className="cart-product">
      <div className="cart-product__content">
        <div className="cart-product__image">
          <img src={product.image} alt={product?.translations?.title?.uz} />
        </div>

        <div className="cart-product__texts">
          <h4 className="cart-product__title">
            {product?.translations?.title?.uz}{" "}
            {sizeOptions.find(({ value }) => value === product.size)?.title}
          </h4>
          {product?.capacity && (
            <p className="cart-product__text">
              {
                capacityOptions.find(({ value }) => value === product?.capacity)
                  ?.title
              }
            </p>
          )}
          {product?.selectedIngredients && (
            <p className="cart-product__text">
              +{" "}
              {product?.selectedIngredients
                .map((item) => item.translations?.title?.uz)
                .join(", ")}
            </p>
          )}
        </div>
      </div>
      <div className="cart-product__right">
        <Counter
          count={product?.qty}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
        <p className="cart-product__price">
          {product?.price * product?.qty} so'm
        </p>
      </div>
    </div>
  );
}

export default CartProduct;
