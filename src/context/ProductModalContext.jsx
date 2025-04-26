import { createContext, useState } from "react";

export const ProductModalContext = createContext();

const ProductModalProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [product, setProduct] = useState(null);
  const [panelType, setPanelType] = useState("three");

  const handleProductModalOpen = (product, panelType) => {
    setModalActive(true);
    if (product) {
      setProduct(product);
    }

    if (panelType) {
      setPanelType(panelType);
    }
  };

  const handleProductModalClose = () => {
    setModalActive(false);
  };

  return (
    <ProductModalContext.Provider
      value={{
        productModalActive: modalActive,
        product,
        panelType,
        handleProductModalClose,
        handleProductModalOpen,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};

export default ProductModalProvider;
