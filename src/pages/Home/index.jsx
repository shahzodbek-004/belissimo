import LocationModal from "../../components/LocationModal";
import Banner from "./components/Banner";
import HomeCategories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import HomeSelect from "./components/Select";

function HomePage() {
  return (
    <section>
      <Banner />
      <LocationModal />
      <HomeSelect />
      <HomeCategories />
      <ProductSection />
    </section>
  );
}
export default HomePage;
