import { useState } from "react";

function ProductCard({ product }) {

  const [added, setAdded] = useState(false);

  const handleAdd = () => {

    setAdded(true);

    console.log(`${product.name} added to cart.`);
  };

  return (
    <div className="product-card">

      <div className="image-placeholder">
        {product.team}
      </div>

      <h2 className="product-name">
        {product.name}
      </h2>

      <p className="product-price">
        ${product.price.toFixed(2)}
      </p>

      <button
        className="add-btn"
        onClick={handleAdd}
        disabled={added}
        style={{
          backgroundColor: added ? "#0a7a33" : "#111"
        }}
      >
        {added ? "Added ✓" : "Add"}
      </button>

    </div>
  );
}

export default ProductCard;