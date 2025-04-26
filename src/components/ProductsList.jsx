import ProductCard from "./ProductCard";

function ProductsList({ list, categoryName }) {
  const modalType =
    categoryName === "Pitsa"
      ? "one"
      : categoryName === "Gazaklar"
      ? "two"
      : "three";
  return (
    <div className="products-list">
      {list.map((product, key) => (
        <ProductCard product={product} key={key} modalType={modalType} />
      ))}
    </div>
  );
}

export default ProductsList;
