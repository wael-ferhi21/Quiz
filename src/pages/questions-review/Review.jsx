import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const [current, setcurrent] = useState(0);
  let { answers, questions } = useSelector((s) => s.quiz);

  const handleClick = () => {
    let nextQuestion = current + 1;
    if (nextQuestion <= questions.length) {
      setcurrent((prev) => ++prev);
      if (nextQuestion === questions.length) {
        navigate("/");
      }
    }
  };

  return (
    <div className='review'>
      <div className='question-section-header'>
        <div>
          <h1>{questions[0].category} Quiz</h1>
          <h6>Answer The Questions Below</h6>
        </div>
      </div>
      <div className='question-section-image'>
        <img
          src={`/assets/${questions[0].category}.jpeg`}
          width={"250px"}
          height={"150px"}
        />
        <div className='question-details'>
          <h1>
            Question {current + 1}/{questions.length}
          </h1>
          <h1>{questions[current].question}</h1>
        </div>
      </div>
      <div className='question-component'>
        <h1>Choose Answer</h1>
        <div className='answers-container'>
          <div className='answers-container'>
            {questions[current].incorrectAnswers.map((answer, key) => (
              <div key={key} className='question-answers'>
                <input
                  type={"radio"}
                  name={"answer"}
                  checked={answers.indexOf(answer) > -1}
                  value={answer}
                />
                <h2> {answer} </h2>
                <div className='answer-preview'>
                  {answer === questions[current].correctAnswer ? (
                    <h2 style={{ color: "green" }}>correct answer</h2>
                  ) : answers.indexOf(answer) > -1 ? (
                    <h2 style={{ color: "red" }}>your answer</h2>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='next-btn-container'>
            <button onClick={handleClick} className='next-btn'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
