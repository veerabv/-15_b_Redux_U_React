import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        state.counter++; // in toolkit we can mutate the state directly because the reduxtoolKit uses another package internally which take the copy of the state
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggle(state) {
        state.isCounter = !state.isCounter;
      },
    },
  });

  export const counterActions = counterSlice.actions;  // this wil create a unique identifier for every action we have in the slice reducers behind the scenes

  export default counterSlice.reducer;