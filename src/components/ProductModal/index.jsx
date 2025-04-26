import { useContext } from "react";
import { ProductModalContext } from "../../context/ProductModalContext";
import ModalPanelTypeOne from "./ModalPanleTypeOne";
import ModalPanelTypeTwo from "./ModalPanelTypeTwo";
import ModalPanelTypeThree from "./ModalPanelTypeThree";

function ProductModal() {
  const { productModalActive, handleProductModalClose, panelType, product } =
    useContext(ProductModalContext);

  const handleClose = (e) => {
    if (
      e.target.classList.contains("modal") &&
      e.target.classList.contains("active")
    ) {
      handleProductModalClose();
    }
  };
  return (
    <div
      className={`modal modal-white-backdrop ${
        productModalActive ? "active" : ""
      } `}
      onClick={handleClose}
    >
      <div className="modal-panel">
        {panelType === "one" ? (
          <ModalPanelTypeOne product={product} handleProductModalClose={handleProductModalClose}/>
        ) : panelType === "two" ? (
          <ModalPanelTypeTwo product={product} handleProductModalClose={handleProductModalClose}/>
        ) : (
          <ModalPanelTypeThree />
        )}
      </div>
    </div>
  );
}

export default ProductModal;
