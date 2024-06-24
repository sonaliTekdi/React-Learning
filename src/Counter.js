import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(15);
  const addCounter = () => {
    if (counter >= 20) {
      alert("limit reached to increase number");
    } else {
      setCounter(counter + 1);
    }
  };
  const removeCounter = () => {
    if (counter <= 0) {
      alert("limit reached to decrease number");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={addCounter}>
        Add
      </button>

      <br />
      <button onClick={removeCounter}>Remove</button>
    </div>
  );
}
export default Counter;
