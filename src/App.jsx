import React, { useState } from 'react';
import './App.css';

function App() {
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(3).fill().map(() => Array(3).fill("")))

  const handleClick = (row, col) => {
    if (board[row][col] !== "") return; // Skip filled cells

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) return turn;
        return cell;
      })
    );

    setBoard(newBoard);
    console.log("Clicked cell:", row, col);
    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <div style={{backgroundColor: "#06132b", minHeight: "100vh", paddingTop: "2rem"}}>
      <table className='center board'>
        <tbody>
        {[0, 1, 2].map((row) => (
          <tr key={row} >
            {[0, 1, 2].map((col) => (
              <td key={col} onClick={()=>handleClick(row,col)}></td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      <div>Current Turn: <span>{turn}</span></div>
    </div>
  );
}

export default App;
