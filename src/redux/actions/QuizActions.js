import {
  SET_NBR,
  SET_DIFFICULTY,
  SET_QUERY,
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCES,
  SET_SCORE,
  ADD_ANSWERS,
  TOGGLE_MODAL,
} from "../constantes/Actions-Type";
import axios from "axios";

export const fetch_data = () => {
  return (dispatch, getState) => {
    let url = `https://the-trivia-api.com/api/questions?${
      getState().quiz.querystring
    }&limit=${getState().quiz.questionsnumber}&difficulty=${
      getState().quiz.difficulty
    }`;
    dispatch(fetch_start());
    axios
      .get(url)
      .then((res) => {
        res.data.map((item) => {
          item.incorrectAnswers.push(item.correctAnswer);
          item.incorrectAnswers.sort();
        });
        dispatch(onSucces(res.data));
      })
      .catch((err) => dispatch(onFailure(err.message)));
  };
};

export const add_answer = (payload) => {
  return {
    type: ADD_ANSWERS,
    payload,
  };
};

export const set_questions_number = (payload) => {
  return {
    type: SET_NBR,
    payload,
  };
};

export const set_difficulty = (payload) => {
  return {
    type: SET_DIFFICULTY,
    payload,
  };
};

export const set_query = (payload) => {
  return {
    type: SET_QUERY,
    payload,
  };
};
export const fetch_start = () => {
  return {
    type: FETCH_START,
  };
};

export const onSucces = (payload) => {
  return {
    type: FETCH_SUCCES,
    payload,
  };
};

export const onFailure = (payload) => {
  return {
    type: FETCH_FAILURE,
    payload,
  };
};

export const set_score = (payload) => {
  return {
    type: SET_SCORE,
    payload,
  };
};

export const toggle_modal = () => {
  return {
    type: TOGGLE_MODAL,
  };
};
