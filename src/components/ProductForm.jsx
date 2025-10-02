import React, { useState } from "react";

function ProductForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Еда");
  const [important, setImportant] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ title, category, important });
    setTitle("");
    setCategory("Еда");
    setImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название продукта"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Еда">Еда</option>
        <option value="Напиток">Напиток</option>
        <option value="Десерт">Десерт</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        Важно
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ProductForm;