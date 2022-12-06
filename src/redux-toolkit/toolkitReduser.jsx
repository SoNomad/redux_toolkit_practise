import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: ["первое", "второе", "третье"],
};

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECCREMENT");

export default createReducer(initialState, {
  [increment]: (state) => {
    state.count = state.count + 1;
  },
  [decrement]: (state) => {
    state.count = state.count - 1;
  },
});
