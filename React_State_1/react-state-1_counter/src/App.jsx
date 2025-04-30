import "./styles.css";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCountUp() {
    setCount(count + 1);
  }
  function handleCountDown() {
    setCount(count - 1);
  }
  console.log("Button Clicked", count);
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={handleCountDown}>-</button>
        <button onClick={handleCountUp}>+</button>
      </div>
    </div>
  );
}
