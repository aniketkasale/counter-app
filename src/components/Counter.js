import { useState } from "react";

function Counter(params) {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState("");

  const handleIncreament = () => {
    setCount(count + factor);
  };

  const handleDecreament = () => {
    setCount(count - factor);
  };

  const handleReset = () => {
    setCount(0);
    setFactor(0);
  };
  const handleFactor = (inputFactor) => {
    inputFactor ? setFactor(parseInt(inputFactor)) : setFactor(0);
  };

  return (
    <div className="container">
      <h1> Counter App</h1>
      <label>
        Enter Factor:
        <input
          type="number"
          onChange={(e) => {
            handleFactor(e.target.value);
          }}
          value={factor}
        />
      </label>
      <div className="count">
        <span style={{ color: count >= 1 ? "green" : "red" }}>{count}</span>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="btn-container">
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
      </div>
    </div>
  );
}
export default Counter;
