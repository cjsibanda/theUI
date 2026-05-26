import ProductCard from "./ProductCard";
import products from "../data/products";
import "./ProductGrid.css";

function ProductGrid() {

  return (
    <section className="products-section">

      <h1 className="section-title">
        Sibanda's Available Products:
      </h1>

      <div className="products-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default ProductGrid;