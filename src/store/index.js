// const redux = require("redux");
import { createStore } from "redux";

const initialState = {counter : 0 , isCounter : true}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        isCounter : state.isCounter,
        counter: state.counter + 1
      };
    case "DEC":
      return {
        counter: state.counter - 1,
        isCounter : state.isCounter
      };

      case "INCREASE":
        return {
            isCounter : state.isCounter,
            counter : state.counter + action.amount
        }

        case "TOGGLE":
            return {
                counter : state.counter,
                isCounter : !state.isCounter
            }
    default:
        return state;
  }
};

const store = createStore(counterReducer);

export default store;


