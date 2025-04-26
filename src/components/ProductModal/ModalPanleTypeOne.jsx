import { useContext, useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import Tabs from "../Tabs";
import {
  capacityOptions,
  ingredientsList,
  sizeOptions,
} from "../../constants/data";
import PlusIcon from "./../../assets/icons/PlusIcon";
import { CartContext } from "../../context/CartContext";

function ModalPanelTypeOne({ product, handleProductModalClose }) {
  const [size, setSize] = useState("small");
  const [capacity, setCapacity] = useState("thick");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const { addToCart } = useContext(CartContext);

  const handleSizeChange = (value) => {
    if (value === "small") {
      setCapacity("thick");
    }
    setSize(value);
  };

  const handleCapacityChange = (value) => {
    setCapacity(value);
  };

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
    handleProductModalClose(); 
  };

  return (
    <div className="product-modal__wrapper">
      <div className="product-modal__left">
        <div className="product-modal__content">
          <div className="product-modal__image">
            <img src={product.image} alt={product.translations.title.uz} />
          </div>
          <h3 className="product-modal__name">
            {product.translations.title.uz}
          </h3>
          <p className="product-modal__desc">{product.translations.desc.uz}</p>
        </div>
        <div className="product-modal__selected">
          <div className="product-modal__board">
            <strong>Tanlangan bort:</strong>
            <span>Mavjud emas</span>
          </div>
          <div className="product-modal__ingredients">
            <strong>Masalliqlar:</strong>
            <span>
              {selectedIngredients.length <= 0
                ? "Tanlanmagan"
                : selectedIngredients
                    .map((item) => item.translations.title.uz)
                    .join(", ")}{" "}
            </span>
          </div>
        </div>  
        <div className="product-modal__price">
          <p>{product.price} so'm</p>
        </div>
      </div>
      <div className="product-modal__right">
        <div className="product-modal__row">
          <p className="product-modal__title">Pitsa kattaligi</p>
          <button
            className="product-modal__close"
            onClick={handleProductModalClose}
          >
            <CloseIcon />
          </button>
        </div>
        <Tabs
          options={sizeOptions}
          defaultValue={size}
          onChange={handleSizeChange}
        />
        <div className="product-modal__select_group">
          <Tabs
            onChange={handleCapacityChange}
            options={
              size === "small"
                ? capacityOptions.filter((item) => item.value !== "thin")
                : capacityOptions
            }
            defaultValue={capacity}
            className="product-modal__capacity"
          />
          <button
            className="product-modal__addboard"
            disabled={!(size === "large" && capacity === "thick")}
          >
            Bort qo'shish
          </button>
        </div>

        <div className="product-modal__row">
          <p className="product-modal__title">Masalliqlarni tanlang</p>
          <p className="product-modal__badge">
            {selectedIngredients.length} / 15
          </p>
        </div>

        <div className="product-modal__ingredients_list">
          {ingredientsList.map((item) => (
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
                <img src={item.imagePng} alt={item.translations.title.uz} />
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

export default ModalPanelTypeOne;
