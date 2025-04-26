import { Element } from "react-scroll";
import ProductsList from "../../../components/ProductsList";
import { products } from "../../../constants/data";

function ProductSection() {
  return (
    <section className="products">
      <div className="container">
        {products.map((category) => (
          <Element name={category.id}>
            <div className="products_row" key={category.id}>
              <h4 className="products-row__title">
                {category.translations.title.uz}
              </h4>
              <ProductsList
                list={
                  category?.groups?.length > 0
                    ? category.groups
                    : category.products
                }
                categoryName={category.translations.title.uz}
              />
            </div>
          </Element>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
