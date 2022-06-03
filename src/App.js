import { useState } from "react";
import "./App.css";
import CounterToDo from "./components/counter-todo/CounterToDo";
import Counter from "./components/counter/Counter";
import DummyCounter from "./components/dummy-counter/DummyCounter";

function App() {
  let [dummyCount, setDummyCount] = useState("0");
  function addDummyHandler() {
    setDummyCount(++dummyCount);
  }
  function subtractDummyHandler() {
    setDummyCount(--dummyCount);
  }
  return (
    <div>
      <CounterToDo />
      {/* <DummyCounter
        dummyCount={dummyCount}
        setDummyCount={setDummyCount}
        addDummyHandler={addDummyHandler}
      />
      <DummyCounter
        dummyCount={dummyCount}
        setDummyCount={setDummyCount}
        addDummyHandler={addDummyHandler}
      />
      <DummyCounter
        dummyCount={dummyCount}
        setDummyCount={setDummyCount}
        addDummyHandler={addDummyHandler}
      />
      <DummyCounter
        dummyCount={dummyCount}
        setDummyCount={setDummyCount}
        addDummyHandler={addDummyHandler}
      /> */}
      {/* <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}
    </div>
  );
}

export default App;
