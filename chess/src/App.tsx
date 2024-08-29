import React from 'react';
import { ChessBoard } from './components/chessBoard';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center'}}>Jims Chess Board</h1>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ChessBoard />
      </div>
      <div style={{ display: 'flex'}}>
        <p style={{ fontWeight: 'bold', marginLeft: '10%'}}>index:</p>
        <p style={{ color: 'red'}}>Player One</p>
        <p style={{ padding: '0 24px'}}>|</p>
        <p style={{ color: 'blue'}}>Player Two</p>
      </div>
    </div>
  );
}

export default App;
