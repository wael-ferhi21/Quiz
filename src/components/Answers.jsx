import React, { useState } from "react";
import PropTypes from "prop-types";

const Answers = ({ answers, handler }) => {
  const [pickedAnswer, setpickedAnswer] = useState("");
  return (
    <div className='answers-container'>
      {answers.map((answer, key) => (
        <div key={key} className='question-answers'>
          <input
            type={"radio"}
            name={"answer"}
            checked={pickedAnswer === answer}
            onChange={() => setpickedAnswer(answer)}
          />
          <h2> {answer} </h2>
        </div>
      ))}
      <div className='next-btn-container'>
        <button onClick={() => handler(pickedAnswer)} className='next-btn'>
          Next
        </button>
      </div>
    </div>
  );
};

Answers.propTypes = {
  data: PropTypes.string,
  handler: PropTypes.func,
  answers: PropTypes.array,
};

export default React.memo(Answers);
