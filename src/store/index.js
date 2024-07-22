import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, isCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++; // in toolkit we can mutate the state directly because the reduxtoolKit uses another package internally which take the copy of the state
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.isCounter = !state.isCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer, // if we have multiple slice we give a object to the reducer in that we can give key value pair for every reducer
});

export default store;
