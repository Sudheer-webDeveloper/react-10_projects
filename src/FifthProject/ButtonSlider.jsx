import React from "react";
import newJobs from "./data";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function ButtonSlider() {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState(newJobs);

  const { id, company, dates, duties, title } = jobs[value];

  return (
    <div>
      <div className="main-class" key={id}>
        <h1 style={{ textAlign: "center" }}>Experience</h1>
        <section className="job-class">
          <div className="section-button-class">
            {jobs.map((job, index) => {
              return (
                <div className="category-class-1">
                  <div
                    className={`button-class-1 ${
                      index === value && "active-class"
                    }`}
                  >
                    <button key={job.id} onClick={() => setValue(index)}>
                      {job.company}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="section-text-class">
            <h2>{title}</h2>
            <h3 className="background">{company}</h3>
            <h3>{dates}</h3>
            {duties.map((duty, index) => {
              return (
                <div className="order-class">
                  <ul>
                    <li key={index}>
                      <FaAngleDoubleRight className="icon-class" />
                      {duty}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ButtonSlider;
