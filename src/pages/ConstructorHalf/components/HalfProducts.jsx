import { pizzas } from "../../../constants/data";

function HalfProducts({
  type,
  selectPizza,
  selectedLeftPizza,
  selectedRightPizza,
}) {
  const addActive = (id) => {
    if (
      (type === "left" && id === selectedLeftPizza.id) ||
      (type === "right" && id === selectedRightPizza.id)
    ) {
      return true;
    }
  };

  const addDisabled = (id) => {
    if (
      (type === "left" && selectedRightPizza.id === id) ||
      (type === "right" && selectedLeftPizza.id === id)
    ) {
      return true;
    }
  };

  const handlePizza = (product, isDisabled) => {
    if (!isDisabled) {
      selectPizza(type, product);
    }
  };

  return (
    <div className="half-products">
      {pizzas.map((item) => (
        <div
          className={`half-product__card ${
            addActive(item.id) ? "active" : ""
          } ${addDisabled(item.id) ? "disabled" : ""}`}
          key={item.id}
          onClick={() => handlePizza(item, addDisabled(item.id))}
        >
          <div className="half-product__card_image">
            <img
              src={item.image2}
              alt=""
              className={item.id === selectedLeftPizza.id ? "disabled" : ""}
            />
            <img
              src={item.image}
              alt=""
              className={item.id === selectedRightPizza.id ? "disabled" : ""}
            />
          </div>
          <h4 className="half-product__card_title">
            {item.translations.title.uz}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default HalfProducts;
