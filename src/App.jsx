import React, { useState } from 'react';
import './App.css';

function App() {
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(3).fill().map(() => Array(3).fill("")))
  const [countMoves, setCountMoves] = useState(0);
  const [gameOver, setgameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [checkTie, setCheckTie] = useState(false);
  
  const checkWin = (board) => {
    let i = 0;
    for (i = 0; i < 3; i++) {
      if (((board[i][0] === board[i][1]) && (board[i][0]=== board[i][2]) && (board[i][0] !== "")) || 
      ((board[0][i] === board[1][i]) && (board[0][i]=== board[2][i]) && (board[0][i] !== ""))) {
        return true;
      }
    }

    if (((board[0][0] === board[1][1]) && (board[1][1]=== board[2][2]) && (board[0][0] !== "")) ||
    ((board[2][0] === board[1][1]) && (board[1][1]=== board[0][2]) && (board[2][0] !== ""))) {
        return true;
    }

    return false;
  }

  const handleClick = (row, col) => {
    if (board[row][col] !== "" || gameOver) return; // Skip filled cells

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) return turn;
        return cell;
      })
    );

    if (checkWin(newBoard)) {
      setgameOver(true);
      setWinner(turn);
      console.log(turn, " wins");
    }
    
    setCountMoves(countMoves => countMoves + 1);
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <div style={{backgroundColor: "#06132b", minHeight: "100vh", paddingTop: "6rem"}}>
      <table className='center board'>
        <tbody>
        {[0, 1, 2].map((row) => (
          <tr key={row} >
            {[0, 1, 2].map((col) => (
              <td key={col} onClick={()=>handleClick(row,col)} className={board[row][col] === "X" ? "PlaceX" : "PlaceO"}>{board[row][col]}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      <div style={{paddingTop: "2rem"}}>Current Turn: <span>{turn}</span></div>
      <div></div>
    </div>
  );
}

export default App;
