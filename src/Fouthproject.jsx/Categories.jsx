import React from "react";

function Categories({ filterItems, categories }) {
  return (
    <div className="button-class">
      {categories.map((category, index) => {
        return (
          <button
            className="button"
            type="button"
            key={index}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
