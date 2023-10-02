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

const Quiz = {
  querystring: "",
  difficulty: "easy",
  questionsnumber: 5,
  questions: [],
  score: 0,
  isloading: false,
  error: null,
  answers: [],
  modal: false,
};

const QuizReducer = (state = Quiz, action) => {
  switch (action.type) {
    case SET_NBR:
      return {
        ...state,
        questionsnumber: action.payload,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        querystring: state.querystring + "categories=" + action.payload,
      };

    case FETCH_SUCCES:
      return {
        ...state,
        isloading: false,
        questions: action.payload,
      };
    case FETCH_START:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    case SET_SCORE: {
      return {
        ...state,
        score: state.score + action.payload,
      };
    }
    case ADD_ANSWERS: {
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
  }
  return state;
};

export default QuizReducer;
