import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onRemove }) {
  if (products.length === 0) return <p>Список пока пуст</p>;

  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default ProductList;