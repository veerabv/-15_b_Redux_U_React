import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isCounter: true };
const initialAuthState = {isAuthenticated : false}

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

const authSlice = createSlice({name : "authentication" , initialState : initialAuthState , reducers : {
    login(state){
        state.isAuthenticated = true

    },
    logout(state){
        state.isAuthenticated = false

    }
}})

const store = configureStore({
  reducer:{counter : counterSlice.reducer,auth : authSlice.reducer}  
});

export const counterActions = counterSlice.actions;  // this wil create a unique identifier for every action we have in the slice reducers behind the scenes
export const authActions = authSlice.actions;

export default store;
