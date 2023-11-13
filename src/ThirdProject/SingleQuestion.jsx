import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="hello-container">
      <div className="Question-container">
        <div className="main-container">
          <h3 className="title">{title}</h3>
          <header>{showInfo && <h4 className="info">{info}</h4>}</header>
        </div>
        <div className="button-class">
          <button onClick={()=>{
            setShowInfo(!showInfo)
          }}>{showInfo? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </div>
      </div>
    </div>
  );
}

export default SingleQuestion;
