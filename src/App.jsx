import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductModal from "./components/ProductModal";

function App() {
  const withoutFooterArray = ['/cart', '/constructor-half', '/constructor']
  const {pathname} = useLocation()

  return (
    <>
      <Header />
      <Main />
      {withoutFooterArray.includes(pathname)  ? null : <Footer />}
      <ProductModal/>
    </>
  );
}

export default App;
