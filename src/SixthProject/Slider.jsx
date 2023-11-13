import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
// import {FaQuoteRight} from './react-icons/fa'
import persons from "./data";

function Slider() {
  const [peoples, setPeople] = useState(persons);

  const [index, setIndex] = useState(0);
  return (
    <div className="slider-class">
      <h1 style={{ textAlign: "center", margin: "20px, 0" }}>
        <span>/</span> Reviews
      </h1>

      <div className="slider">
        <div className="main-button">
          <button type="button">
            <FaChevronLeft />
          </button>
        </div>

        <div className="mains-container">
          {peoples.map((people, personIndex) => {
            const { id, image, title, name, quote } = people;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div className="img-class" key={id}>
                <section className={position}>
                  <img src={image} alt={title} />
                  <h2>{name}</h2>
                  <h3>{title}</h3>
                  <p> {quote}</p>
                  <FaQuoteRight className="quotes" />
                </section>
              </div>
            );
          })}
        </div>

        <div className="main-button">
          <button type="button">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
