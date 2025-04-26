import { souceList } from "../../constants/data";
import PlusIcon from "../../assets/icons/PlusIcon";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

function ModalPanelTypeTwo({ product, /*handleProductModalClose*/ }) {
  const [size] = useState("small");
   const [capacity] = useState("thick");
   const [selectedIngredients, setSelectedIngredients] = useState([]);
   const { addToCart } = useContext(CartContext);
  const handleSelectIngredient = (ingredient) => {
    if (selectedIngredients.some((item) => item.id === ingredient.id)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item.id !== ingredient.id)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };
  const handleAdd = () => {
    const newProduct = {
      ...product,
      size,
      capacity,
      selectedIngredients
    }
    addToCart(newProduct);
  };

  return (
    <div className="product-modal__wrapper product-modal__two">
      <div className="product-modal__left">
        <div className="product-modal__image">
          <img src={product.image} alt={product.translations.title.uz} />
        </div>
      </div>
      
      <div className="product-modal__right">
        <h3 className="product-modal__name">{product.translations.title.uz}</h3>
        <div className="product-modal__price">
          <p>{product.price} so'm</p>
        </div>
        
        <div className="product-modal__row">
          <p className="product-modal__title">Masalliqlarni tanlang</p>
          <p className="product-modal__badge">1 / 1</p>
        </div>
        
        <div className="product-modal__ingredients_list">
          {souceList.map((item) => (
            <div
              className={
                selectedIngredients.some(
                  (ingredient) => ingredient.id === item.id
                )
                  ? "ingredients-card active"
                  : "ingredients-card"
              }
              onClick={() => handleSelectIngredient(item)}
            >
              <div className="ingredients-card__image" key={item.id}>
                <img src={item.image} alt={item.translations.title.uz} />
              </div>
              <p className="ingredients-card__title">
                {item.translations.title.uz}
              </p>
              <p className="ingredients-card__price">{item.price} so'm</p>
              <button className="ingredients-card__add">
                <PlusIcon />
              </button>
            </div>
          ))}
        </div>
        <button className="product-modal__button" onClick={handleAdd}>
          Savatga qo'shish
        </button>
      </div>
    </div>
  );
}

export default ModalPanelTypeTwo;
