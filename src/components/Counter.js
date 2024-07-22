import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // useSelector will directly give subscription to the store for this function and give acess to the component
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); // we change the configurestore to object
  const show = useSelector((state) => state.counter.isCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incHandler = () => {
    dispatch(counterActions.increment());
  };

  const decHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));  // here we will not give any object , but it will create automatically behind the scenes like {payload : 10 , type : uniqueIdentifier}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

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
