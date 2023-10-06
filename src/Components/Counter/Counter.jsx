import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const incrementClickHandler = () => {
    setCounterValue(counterValue + inputValue);
  };

  const decrementClickHandler = () => {
    setCounterValue(counterValue - inputValue);
  };

  // setCounterValue ((prevState)=>{
  //    return prevState + inputValue
  // });

  const inputChangeHandler = (e) => {
    setInputValue(Number(e.target.value));
  };

  const deleteHandler = () => {
    const indexOfCounter = props.index;
    props.setItemArr((prevState) => {
      console.log(prevState);
      const newItemArr = prevState.filter((item, index) => {
        if (indexOfCounter === index) return false;
        else return true;
      });
      return newItemArr;
    });
  };

  useEffect(() => {
    console.log("useEffect Ran");
    return () => {};
  }, [counterValue]);

  return (
    <div>
      {/* <h2>Item: {props.item}</h2> */}
      {/* <h2>Item: {props.price}</h2> */}
      {/* <h2>Counter: {counterValue}</h2> */}
      <h2>Item: {props.title}</h2>
      <h2>Price: {props.price} </h2>
      <h2>Quantity: {counterValue}</h2>
      <input onChange={inputChangeHandler} type="text" />
      <button onClick={incrementClickHandler}>Increment</button>
      <button onClick={decrementClickHandler}>Decrement</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export {Counter};
