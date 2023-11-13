import React from "react";
import paragraphs from "./data";
import { useState } from "react";

function RandomParagraph() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // note initially count is string here even thought it is on number input so we have to covert it into number 
    let amount = parseFloat(count);
    console.log(typeof amount)

    if(amount <= 0){
        amount =1
    }
    if(amount >=paragraphs.length){  // paragraphs.length === 8
        amount = paragraphs.length
    }

    setText(paragraphs.slice(0,amount))
    // we want random paragraph based on input count so, that's why we are using slice // but there is a gotcha here if user go count in -ve value or more than beyond the length of the array it is displaying the whole data or paragraphs which is not good that's why we do like this see above conditions :

    // Keep in mind slice will not include the last index if we give 8 then it go's to 8 and stop means till seventh index it will print all



  };
  return (
    <div className="para-class">
      <h1>ARE YOU TIRED OF BORING LOREM IPSUM? THEN TRY THIS</h1>

      <form className="form-class" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph :</label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit">Generate</button>
      </form>

      <div className="graph">
        {text.map((item,index)=>{
            return <p key={index}>{`${index} :)  ${item}`}</p>
        })}
      </div>
    </div>
  );
}

export default RandomParagraph;
