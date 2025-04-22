import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: "#06132b", minHeight: "100vh", paddingTop: "2rem"}}>
      <table className='center'>
        <thead>
        <tr>
            <td id="R1C1"></td>
            <td id="R1C2"></td>
            <td id="R1C3"></td>
        </tr>
        <tr>
            <td id="R2C1"></td>
            <td id="R2C2"></td>
            <td id="R2C3"></td>
        </tr>
        <tr>
            <td id="R3C1"></td>
            <td id="R3C2"></td>
            <td id="R3C3"></td>
        </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
