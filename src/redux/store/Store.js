import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../reducers";

const Store = configureStore({ reducer: Reducer });

export default Store;
