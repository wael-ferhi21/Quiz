import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetch_data } from "../../redux/actions/QuizActions";
import "./start.css";

const Start = () => {
  let { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(fetch_data());
    navigate("/quiz");
  };
  return (
    <div className='start-section'>
      <h1> {category} Quiz </h1>
      <h5>Read the following instructions </h5>
      <div className='image-section'>
        <img
          src={`/assets/${category}.jpeg`}
          width={"300px"}
          height={"200px"}
        />
        <div className='infos-section'>
          <ul>
            <li>
              <span>Date : </span>
              {new Date().getDate() +
                "/" +
                new Date().getMonth() +
                "/" +
                new Date().getFullYear()}
            </li>
            <li>
              <span>Time Limit :</span> 30 mins
            </li>
            <li>
              <span>Attempts :</span> Once
            </li>
            <li>
              <span>Points :</span> 200 points
            </li>
          </ul>
        </div>
      </div>
      <div className='instructions'>
        <h1>Instructions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex placeat
          nulla autem ipsum aliquam perferendis, quaerat nostrum.
          Necessitatibus, ullam quod! Dolore a magni odit animi excepturi natus
          autem voluptatem expedita?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          excepturi totam vel blanditiis, voluptatibus laboriosam culpa
          repellendus architecto natus consequuntur!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eos
          quidem distinctio modi id soluta? Lorem ipsum dolor sit amet.
        </p>
      </div>
      <button className='start-btn' onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Start;
