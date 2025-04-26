import { useCallback, useMemo, useState } from "react";
import Tabs from "../../components/Tabs";
import {
  capacityOptions,
  ingredientsList,
  sizeOptions,
} from "../../constants/data";
import PlusIcon from "../../assets/icons/PlusIcon";

function ConstructorPage() {
  const [size, setSize] = useState("small");
  const [capacity, setCapacity] = useState("thick");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSizeChange = (value) => {
    if (value === "small") {
      setCapacity("thick");
    } 
    setSize(value);
    setSelectedIngredients([])
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

  const totalPrice =  useMemo(() => {
    let price = sizeOptions.find(item => item.value === size).price
    price = selectedIngredients.reduce((a, b) => a + b.price, price)

    return price
  }, [size, selectedIngredients])

  const isDisabled = useMemo(() => {
    return !(selectedIngredients.length > 0 && selectedIngredients.length < 11 )
  }, [selectedIngredients])

  return (
    <section className="constructor-page container">
      <div className="constructor-wrapper">
        <div className="constructor-left">
          <div className="constructor-banner">
            <img
              src="./images/constructor-page-banner.webp"
              alt="constructor page banner"
            />
          </div>
          {selectedIngredients.length > 0 && (
            <div className="selected-ingredients">
              {selectedIngredients.map((item) => (
                <p key={item.id}>
                  {item.translations.title.uz},{"   "}
                </p>
              ))}
            </div>
          )}
          <div className="constructor-tab">
            <p className="constructor-text">Pitsa kattaligi</p>
            <Tabs
              options={sizeOptions}
              defaultValue={size}
              onChange={handleSizeChange}
            />
          </div>
          <div className="constructor-tab">
            <p className="constructor-text">
              {sizeOptions.find((item) => item.value === size).title}
            </p>
            <Tabs
              options={
                size === "small"
                  ? capacityOptions.filter((item) => item.value !== "thin")
                  : capacityOptions
              }
              defaultValue={capacity}
              onChange={handleCapacityChange}
            />
          </div>
          {selectedIngredients.length > 10 && (
            <p className="constructor-text error">
              Siz juda ko'p ingredient qo'shdingiz, iltimos, ingredientlar
              sonini 10 tagacha kamaytiring
            </p>
          )}
          <div className="constructor-price__row">
            <p className="constructor-price__text">{totalPrice.toLocaleString()} so'm</p>
            <button className="constructor-price__button" disabled={isDisabled}>
              Savatga qo'shish
            </button>
          </div>
        </div>
        <div className="constructor-right">
          <div className="product-modal__row">
            <p className="product-modal__title">Masalliqlarni tanlang</p>
            <p className="product-modal__badge">
              {selectedIngredients.length} / 10
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
        </div>
      </div>
    </section>
  );
}
export default ConstructorPage;
