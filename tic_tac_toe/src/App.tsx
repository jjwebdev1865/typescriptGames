import React, { ReactNode, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';

function App() {
  const [boardGame, setBoardGame] = useState<ReactNode | null>(null)
  const { playerTurn, initBoard } = useBoard()

  useEffect(() => {
    if (boardGame === null) {
      setBoardGame(initBoard)
    }
  }, [boardGame, initBoard])

  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1>Tic Tac Toe</h1>
      <h2>Goal is to incorporate AI to play against</h2>
      <h3>This is a best of 3 game</h3>

      <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>

        {/* {boardGame === null ? buildInitBoardRows() : boardGame} */}
        {boardGame}
        <p>2nd game</p>
        <p>3rd game</p>
      </div>

      <div style={{ textAlign: 'center'}}>
        <h2>Player Turn: {playerTurn}</h2>
      </div>
    </div>
  );
}

export default App;
