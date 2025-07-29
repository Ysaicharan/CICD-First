import React, { useState } from "react";
import { Link } from "react-router-dom";

function TicTacToe() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(initialBoard);
    setXIsNext(true);
  }

  function renderCell(index) {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((_, i) => renderCell(i))}
      </div>
      <div className="status">
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Next Player: ${xIsNext ? "X" : "O"}`
          : "It's a Draw!"}
      </div>
      <button className="reset-btn" onClick={resetGame}>Restart</button>
      <br />
      <Link to="/" className="back-btn">Back to Menu</Link>
    </div>
  );
}

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default TicTacToe;
