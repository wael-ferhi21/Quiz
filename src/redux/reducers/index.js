import { combineReducers } from "redux";
import QuizReducer from "../reducers/QuizReducer";
import UserReducer from "../reducers/UserReducer";

export default combineReducers({
  quiz: QuizReducer,
  user: UserReducer,
});
