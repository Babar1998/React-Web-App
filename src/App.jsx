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
        }}
      >
        Create Counter
      </button>
      {itemArr.map((item, index) => {
        return <Counter key = {index} title={item.title} price={item.price} />;
      })}
    </div>
  );
}
export default App;
