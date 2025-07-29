import React, { useState } from "react";
import { Link } from "react-router-dom";

function CounterGame() {
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <h1>Counter Game</h1>
      <p className="status">Score: {score}</p>
      <div>
        <button className="reset-btn" onClick={() => setScore(score + 1)}>+1</button>
        <button className="reset-btn" onClick={() => setScore(score - 1)}>-1</button>
        <button className="reset-btn" onClick={() => setScore(0)}>Reset</button>
      </div>
      <br />
      <Link to="/" className="back-btn">Back to Menu</Link>
    </div>
  );
}

export default CounterGame;
