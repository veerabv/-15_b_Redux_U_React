import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // useSelector will directly give subscription to the store for this function and give acess to the component

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};
  const incHandler = () => {
    dispatch({ type: "INC" });
  };

  const decHandler = () => {
    dispatch({ type: "DEC" });
  };

  const increaseHandler = () => {
    dispatch({type:"INCREASE" , amount : 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment BY 5</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
