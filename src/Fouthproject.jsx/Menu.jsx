import React from "react";

function Menu({ items }) {
  return (
    <div className="card-class">
      {items.map((MenuItem) => {
        const { id, title, price, img, desc } = MenuItem;
        return (
          <article key={id} className="card">
            <div className="card-1">
              <img src={img} alt="" />
            </div>
            <div className="card-2">
              <div className="title-class">
                <h3>{title}</h3>
                <p>${price}</p>
              </div>
              <div className="paragraph">
                <p>{desc}</p></div>
            </div>
          </article>
        );
      })}
      <hr />
    </div>
  );
}

export default Menu;
