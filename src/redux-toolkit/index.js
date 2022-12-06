import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReduser from "./toolkitReduser";

const rootReducer = combineReducers({
  toolkit: toolkitReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
