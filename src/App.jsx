import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./TicTacToe";
import CounterGame from "./CounterGame";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="menu">
                <h1>Game Menu</h1>
                <Link to="/tic-tac-toe" className="btn">Play Tic Tac Toe</Link>
                <Link to="/counter" className="btn">Play Counter Game</Link>
              </div>
            }
          />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/counter" element={<CounterGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
