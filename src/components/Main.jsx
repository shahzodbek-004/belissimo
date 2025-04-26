import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import LoginPage from "../pages/Login";
import ConstructorPage from "../pages/Constructor";
import ConstructorHalfPage from "../pages/ConstructorHalf";
import ComboPage from "../pages/Combo";
import CartPage from "../pages/Cart";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/constructor" element={<ConstructorPage />} />
        <Route path="/constructor-half" element={<ConstructorHalfPage />} />
        <Route path="/combo" element={<ComboPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
}

export default Main;
