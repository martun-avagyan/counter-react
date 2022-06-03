import React, { useEffect, useState } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    setCount(() => count + 1);
  };
  const subtractHandler = () => {
    setCount(() => count - 1);
  };
  if (count % 5 === 0) alert("blah");
  return (
    <div>
      {/* {count % 5 === 0 && alert("Number is divisible by 5")} */}
      <div className={classes.counterContainer}>
        <div>
          <div className={classes.counterBox}>{count}</div>
        </div>
        <div className="buttons">
          <button className={classes.counterButton} onClick={subtractHandler}>
            Subtract
          </button>
          <button className={classes.counterButton} onClick={addHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
