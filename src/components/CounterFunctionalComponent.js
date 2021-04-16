import React, { useState } from "react";

const CounterFunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => {
          // do more stuff here
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <br />
      {counter}
    </div>
  );
};

export default CounterFunctionalComponent;
