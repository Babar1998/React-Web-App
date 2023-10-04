import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = (props)=> {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const incrementClickHandler = () => {
        setCounterValue(counterValue + inputValue);
    };

    const inputChangeHandler = (e) => {
        const inputVal = Number(e.target.value);
        setInputValue(inputVal);
    };

    useEffect(() => {
        console.log("useEffect");
    }, [])
    
    return (
        <div>
            <h2>{props.name} Counter: {counterValue}</h2>
            <input onChange = {inputChangeHandler} type = "text"/>
            <button onClick={incrementClickHandler}>Increment</button>
        </div>
    );
};

export default Counter;