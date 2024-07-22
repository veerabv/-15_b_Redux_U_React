// const redux = require("redux");
import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isCounter: true };

const counterSlice = createSlice({ name: "counter", initialState: initialState, reducers: {
    increment(state) {
        state.counter++; // in toolkit we can mutate the state directly because the reduxtoolKit uses another package internally which take the copy of the state
    },
    decrement(state) {
        state.counter--;
    },
    increase(state , action) {
        state.counter = state.counter + action.amount
    },
    toggle(state) {
        state.isCounter = !state.isCounter
    }
} });

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        isCounter: state.isCounter,
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        counter: state.counter - 1,
        isCounter: state.isCounter,
      };

    case "INCREASE":
      return {
        isCounter: state.isCounter,
        counter: state.counter + action.amount,
      };

    case "TOGGLE":
      return {
        counter: state.counter,
        isCounter: !state.isCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
