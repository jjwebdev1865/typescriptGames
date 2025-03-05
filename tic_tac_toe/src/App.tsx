import React, { ReactNode, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { BoardSpot } from './components/BoardSpot/BoardSpot';

function App() {
  const rows = ['A', 'B', 'C']
  const [boardGame, setBoardGame] = useState<ReactNode | null>(null)

  const { playerTurn } = useBoard()

  // TODO: change to callback. warning in console
  useEffect(() => {
    if (boardGame === null) {
      const test = buildInitBoardRows()
      setBoardGame(test)
    }
  }, [boardGame])

  function buildInitBoardRows() {
    return (
      <div>
        {rows.map((row) => {
          const index = 1
          return (
            <ul key={`board-row-${row}`} style={{ listStyle: 'none', display: 'flex', margin: 0}}>
              <BoardSpot row={row} index={index} />
              <BoardSpot row={row} index={index + 1} />
              <BoardSpot row={row} index={index + 2} />
            </ul>
          )
        })}
      </div>
    )
  }

  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1>Tic Tac Toe</h1>
      <h2>Goal is to incorporate AI to play against</h2>
      <h3>This is a best of 3 game</h3>

      <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>
        {boardGame !== null && boardGame}
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
