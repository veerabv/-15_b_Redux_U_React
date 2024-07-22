// const redux = require("redux");
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        counter: state.counter - 1,
      };

      case "INCREASE":
        return {
            counter : state.counter + action.amount
        }
    default:
        return state;
  }
};

const store = createStore(counterReducer);

export default store;


