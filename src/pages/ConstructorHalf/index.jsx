import { useState } from "react";
import HalfProducts from "./components/HalfProducts";
import { capacityOptions, pizzas, sizeOptions } from "../../constants/data";
import Tabs from "../../components/Tabs";

function ConstructorHalfPage() {
  const [selectedLeftPizza, setSelectedLeftPizza] = useState(pizzas[0]);
  const [selectedRightPizza, setSelectedRightPizza] = useState(pizzas[1]);

  const selectPizza = (type, product) => {
    if (type === "left") {
      setSelectedLeftPizza(product);
    } else if (type === "right") {
      setSelectedRightPizza(product);
    }
  };

  return (
    <section className="half container">
      <div className="half-wrapper">
        <div className="half-left">
          <h2 className="half-title">Chap tomon</h2>
          <HalfProducts
            selectPizza={selectPizza}
            type="left"
            selectedLeftPizza={selectedLeftPizza}
            selectedRightPizza={selectedRightPizza}
          />
        </div>
        <div className="half-middle">
          <div className="half-middle__image">
            <span className="left">
              <img src={selectedLeftPizza.image2} alt="" />
            </span>
            <span className="right">
              <img src={selectedRightPizza.image} alt="" />
            </span>
          </div>

          <div style={{ width: "100%" }}>
            <p>Pitsa kattaligi</p>
            <Tabs
              options={sizeOptions.filter((item) => item.value === "large")}
              defaultValue={"large"}
            />
            <p>Bortni tanlang</p>

            <Tabs
              options={capacityOptions}
            />
          </div>
        </div>
        <div className="half-right">
          <h2 className="half-title">O'ng tomon</h2>
          <HalfProducts
            selectPizza={selectPizza}
            type="right"
            selectedLeftPizza={selectedLeftPizza}
            selectedRightPizza={selectedRightPizza}
          />
        </div>
      </div>
    </section>
  );
}
export default ConstructorHalfPage;
