import React, { useState } from 'react';
import './App.css';

function App() {
  const [turn, setTurn] = useState('X');

  const handleClick = () => {
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <div style={{backgroundColor: "#06132b", minHeight: "100vh", paddingTop: "2rem"}}>
      <table className='center'>
        <thead>
        <tr>
            <td id="R1C1" onClick={handleClick}></td>
            <td id="R1C2" onClick={handleClick}></td>
            <td id="R1C3" onClick={handleClick}></td>
        </tr>
        <tr>
            <td id="R2C1" onClick={handleClick}></td>
            <td id="R2C2" onClick={handleClick}></td>
            <td id="R2C3" onClick={handleClick}></td>
        </tr>
        <tr>
            <td id="R3C1" onClick={handleClick}></td>
            <td id="R3C2" onClick={handleClick}></td>
            <td id="R3C3" onClick={handleClick}></td>
        </tr>
        </thead>
      </table>
      <div>Current Turn: <span>{turn}</span></div>
    </div>
  );
}

export default App;
