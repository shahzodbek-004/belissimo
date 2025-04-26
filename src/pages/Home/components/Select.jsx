import { useState } from "react";
import Tabs from "../../../components/Tabs";
import { deliveryTypeList } from "../../../constants/data";
import FilialPanel from "./FilialPanel";
import YetkazibBerishPanel from "./YetkazibBerishPanel";

function HomeSelect() {
  const [selectedDeliveryType, setSelectedDeliveryType] = useState(
    deliveryTypeList[1].value
  );

  const [slectFilialPanelVisible, setIsFilialPanelVisible] = useState(false);

  const [slectYetkazibBerishPanel, setYetkazibBerishPanel] = useState(false);

  const handleChangeDeliveryType = (value) => {
    setSelectedDeliveryType(value);
  };

  const toggleFilialPanel = () => {
    setIsFilialPanelVisible(deliveryTypeList[1].value === selectedDeliveryType);
  };

  const closeFilialPanel = () => {
    setIsFilialPanelVisible(false);
  };
  const toggleYetkazibBerishPanel = () => {
    setYetkazibBerishPanel(deliveryTypeList[0].value === selectedDeliveryType);
  };

  const closeYetkazibBerishPanel = () => {
    setYetkazibBerishPanel(false);
  };

  return (
    <section className="select">
      <div className="container select-wrapper">
        <Tabs
          options={deliveryTypeList}
          onChange={handleChangeDeliveryType}
          defaultValue={selectedDeliveryType}
          className="select-tab"
        />
        
        <div className="select-city">
          <button className="select-city__button" onClick={() => { toggleFilialPanel(); toggleYetkazibBerishPanel(); }}>
            <span className="select-city__text">
              {selectedDeliveryType === "delivery"
                ? "Yetkazib berish manzilini tanlang"
                : "Filialni tanlang"}
            </span>
            <span className="select-city__icon">
              <img src="/images/edit-yellow-icon.svg" alt="Edit icon" />
            </span>
          </button>
        </div>

        {slectFilialPanelVisible && <FilialPanel onClose={closeFilialPanel} />}
        {slectYetkazibBerishPanel && <YetkazibBerishPanel onClose={closeYetkazibBerishPanel} />}
      </div>
    </section>
  );
}

export default HomeSelect;
