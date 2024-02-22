import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCounterContext } from "./lib/store";

function App() {
  const [input, setInput] = useState("");
  const { state, dispatch } = useCounterContext();

  const canClick = Boolean(input) && Boolean(Number(input));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count: {state.value}</h1>
      <label htmlFor="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type amount here"
        />
      </label>
      <div className="card">
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "incrementByAmount", payload: input });
          }}
          disabled={!canClick}
        >
          incrementByAmount
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
