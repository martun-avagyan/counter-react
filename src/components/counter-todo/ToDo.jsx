import { React, useState } from "react";
import classes from "./ToDo.module.css";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") return;
    if (toDos.length === 19) {
      alert("too many tasks");
      return;
    }
    setToDos(() => [...toDos, input]);
    setInput("");
  };
  console.log(toDos);
  const inputHandler = (e) => setInput(e.target.value);

  return (
    <div className={classes.toDoContainer}>
      <div className="taskManagerContainer">
        <form onSubmit={submitHandler}>
          <input
            onChange={inputHandler}
            value={input}
            placeholder="I have to"
            type="text"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className={classes.toDosContainer}>
        {toDos.map((item) => {
          return <div key={Math.random()}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default ToDo;
