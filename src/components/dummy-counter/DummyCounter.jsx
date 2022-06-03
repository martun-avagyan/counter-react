import React from "react";
import classes from "./DummyCounter.module.css";
const DummyCounter = ({
  dummyCount,
  addDummyHandler,
  subtractDummyHandler,
}) => {
  return (
    <div className={classes.dummyCounterContainer}>
      <div>{dummyCount}</div>
      <div>
        <button onClick={subtractDummyHandler}>Subtract</button>
        <button onClick={addDummyHandler}>Add</button>
      </div>
    </div>
  );
};

export default DummyCounter;
