import { useContext } from "react";
import { ProductModalContext } from "../context/ProductModalContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, modalType }) {
  const navigate = useNavigate();
  const { handleProductModalOpen } = useContext(ProductModalContext);

  const handleClick = () => {
    if (product.menuType === "half") {
      navigate("/constructor-half");
    } else if (product.menuType === "constructor") {
      navigate("/constructor");
    } else {
      handleProductModalOpen(product, modalType);
    }
  };

  return (
    <div className="products-card" onClick={handleClick}>
      <div className="products-card__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="products-card__content">
        <h4 className="products-card__title">
          {product.translations.title.uz}
        </h4>
        <p className="products-card__subtitle">
          {Array.isArray(product.translations.desc)
            ? ""
            : product.translations?.desc?.uz}
        </p>
        <p className="products-card__price">{`${product?.price?.toLocaleString()} so'm`}</p>
      </div>
    </div>
  );
}

export default ProductCard;
