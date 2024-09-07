import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, splits, setSplits, active } =
    useTimer(0);

  // Handle the split functionality
  const handleSplit = () => {
    setSplits((prevSplits) => [...prevSplits, time]);
  };

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={handleSplit}>
            Split
          </button>
        </div>
      </div>

      <div className="split__wrapper">
        <h2>Split Times</h2>
        <ul>
          {splits.map((split, index) => (
            <li key={index}>{formatTime(split)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
