import React from "react";

function ProductItem({ product, onRemove }) {
  return (
    <li>
      {product.important && "*"} {product.title} ({product.category}){" "}
      <button onClick={() => onRemove(product.id)}>Удалить</button>
    </li>
  );
}


export default ProductItem;
