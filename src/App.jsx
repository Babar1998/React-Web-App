import {Counter} from "./Components/Counter/Counter";
import { useState } from "react";
import "./App.css";
import "./Components/Counter/Counter.css";

function App() {
  const [counterName, setCounterName] = useState("");
  const [counterPrice, setCounterPrice] = useState("");
  const [itemArr, setItemArr] = useState([]);
  return (
    <div>
      <input
        onChange={(e) => {
          setCounterName(e.target.value);
        }}
        type="text"
      />
      <input
        onChange={(e) => {
          setCounterPrice(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          const newItemArr = [
            { title: counterName, price: counterPrice },
            ...itemArr,
          ];
          setItemArr(newItemArr);
          console.log(newItemArr);
        }}
      >
        Create Counter
      </button>
      {itemArr.map((item, index) => {
        return <Counter key = {index} index = {index} title={item.title} price={item.price} setItemArr = {setItemArr}/>;
      })}
    </div>
  );
}
export default App;
