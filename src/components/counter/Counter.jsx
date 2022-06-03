import React, { useState } from "react";

import classes from "./Counter.module.css";

const Counter = () => {
  function addHandler() {
    setCount(++count);
  }
  function subtractHandler() {
    setCount(--count);
  }
  let [count, setCount] = useState("0");
  return (
    <div className={classes.counterContainer}>
      <div>{count}</div>
      <div>
        <button onClick={subtractHandler}>Subtract</button>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
