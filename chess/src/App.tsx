import React from 'react';
import { ChessBoard } from './components/chessBoard';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center'}}>Jims Chess Board</h1>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ChessBoard />
      </div>
      
    </div>
  );
}

export default App;
