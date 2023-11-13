import React from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";
import "./Fourth.css";

//**----------- This project is also like small project on map and filter methods---------------------- **//

const allCategories = [
  "All",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];
console.log(allCategories);
//Array(6) [ "all", "breakfast", "lunch", "shakes", "dinner", "snakes" ] the allCategories return like this

function Index_2() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      console.log(item.category);
      return item.category === category;
    });
    setMenuItems(newItems);
    console.log(newItems);
    // this will print the specific category suppose if we click on the breakfast that category will print in the array newItems
  };

  return (
    <main>
      <h1 style={{textAlign:"center", margin:"20px" }}>Fourth Project </h1>
      <div className="main-class">
        <h1>Our Menu</h1>
        <div className="category-class">
          <Categories filterItems={filterItems} categories={categories} />
        </div>

        <div className="menu-class">
          <Menu items={menuItems} />
        </div>
      </div>

      <hr />
    </main>
  );
}

export default Index_2;
