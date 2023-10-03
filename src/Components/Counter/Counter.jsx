import { useState } from "react";
import "./Counter.css";

const Counter = ()=> {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const incrementClickHandler = () => {
        setCounterValue(counterValue + inputValue);
    };

    const inputChangeHandler = (e) => {
        const inputVal = Number(e.target.value);
        setInputValue(inputVal);
    };
    return (
        <div>
            <h1>Counter</h1>
            <h2>{counterValue}</h2>
            <input onChange = {inputChangeHandler} type = "text"/>
            <button onClick={incrementClickHandler}>Increment</button>
        </div>
    );
};

export default Counter;