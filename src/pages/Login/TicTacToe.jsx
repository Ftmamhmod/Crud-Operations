import React, { useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>
      {squares[i]}
    </button>
  );

  return (
    <div>
      <div className="status text-white mb-2">
        {winner ? `Winner: ${winner}` : `Next: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
        <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
        <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
      </div>
      <button className="mt-3 btn" onClick={resetGame}>Restart</button>
    </div>
  );
}

function calculateWinner(sq) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
  ];
  for (let [a,b,c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
  return null;
}

export default TicTacToe;
