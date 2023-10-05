import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = (props)=> {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const incrementClickHandler = () => {
        setCounterValue(counterValue + inputValue);
    };

    const decrementClickHandler = () => {
        setCounterValue(counterValue - inputValue);
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
            {/* <h2>Item: {props.item}</h2> */}
            {/* <h2>Item: {props.price}</h2> */}
            {/* <h2>Counter: {counterValue}</h2> */}
            <h2>Item: {props.title}</h2>
            <h2>Price: {props.price} </h2>
            <h2>Quantity: {counterValue}</h2>
            <input onChange = {inputChangeHandler} type = "text"/>
            <button onClick={incrementClickHandler}>Increment</button>
            <button onClick={decrementClickHandler}>Decrement</button>
        </div>
    );
};

export default Counter;