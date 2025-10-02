import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Хлеб", category: "Еда", important: false },
    { id: 2, title: "Молоко", category: "Напиток", important: true },
    { id: 3, title: "Торт", category: "Десерт", important: false },
  ]);

  const addProduct = ({ title, category, important }) => {
    if (title.trim() === "") return;
    const newProduct = {
      id: Date.now(),
      title,
      category,
      important,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearList = () => setProducts([]);

  const total = products.length;
  const importantCount = products.filter((p) => p.important).length;

  return (
    <div>
      <h1>Список покупок для вечера</h1>
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} onRemove={removeProduct} />
      <p>Всего продуктов: {total} / Важных: {importantCount}</p>
      {total > 0 && (
        <button onClick={clearList}>Очистить список</button>
      )}
    </div>
  );
}

export default App;