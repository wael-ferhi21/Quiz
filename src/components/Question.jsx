import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Answers from "./Answers";
import PropTypes, { object } from "prop-types";
import {
  add_answer,
  set_score,
  toggle_modal,
} from "../redux/actions/QuizActions";

const Question = ({ questions, img }) => {
  const [current, setcurrent] = useState(0);

  const dispatch = useDispatch();
  const handleNext = (answer) => {
    dispatch(add_answer(answer));
    let nextQuestion = current + 1;
    if (answer === questions[current].correctAnswer) {
      dispatch(set_score(10));
    }
    if (nextQuestion <= questions.length) {
      setcurrent((prev) => ++prev);
      if (nextQuestion === questions.length) {
        dispatch(toggle_modal());
      }
    }
  };

  return (
    <div className='question-component'>
      <div className='question-section'>
        <div className='question-section-header'>
          <div>
            <h1>{questions[0]?.category} Quiz</h1>
            <h6>Answer The Questions Below</h6>
          </div>
        </div>
        <>
          {questions.map((question, index) => (
            <div key={index + question.id}>
              {index === current ? (
                <div>
                  <div className='question-section-image'>
                    <img src={img} width={"250px"} height={"150px"} />
                    <div className='question-details'>
                      <h1>
                        Question {current + 1}/{questions.length}
                      </h1>
                      <h1>{question.question}</h1>
                    </div>
                  </div>
                  <div>
                    <h1>Choose Answer</h1>
                    <div className='answers-container'>
                      <Answers
                        answers={question.incorrectAnswers}
                        handler={handleNext}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

Question.propTypes = {
  img: PropTypes.string,
  questions: PropTypes.arrayOf(object),
};

export default React.memo(Question);
