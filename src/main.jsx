import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "swiper/css";
import "./styles/main.css";
import LocationContextProvider from "./context/LocationContext.jsx";
import ProductModalProvider from "./context/ProductModalContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.querySelector(".wrapper")).render(
  <BrowserRouter>
    <CartContextProvider>
      <LocationContextProvider>
        <ProductModalProvider>
          <App />
        </ProductModalProvider>
      </LocationContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
