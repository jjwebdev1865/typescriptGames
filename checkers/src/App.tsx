import React, { useContext } from 'react';
import BoardStartingLayout from './utils/helperFunctions/boardStartSetup';
import { getBoardRowsArray } from './utils/helperFunctions/getBoardRowsArray';
import { GameContext } from './context/gameContext';
import { PieceSpot } from './component/PieceSpot/pieceSpot';

export type PieceInfo = {
  position: number,
  piece: null
}

export type PieceInfoFE = {
  key: string
  piece: null
}

function App() {
  const { playerTurn } = useContext(GameContext)
  const board: Object = BoardStartingLayout()

  function getBoardRows() {
    const boardDisplay = getBoardRowsArray(board)
    const boardHtmlDisplay = boardDisplay.map((row, index) => {
      const rowKey = row[0].key.split("")[0]

      return <li key={`board-row-${rowKey}`} style={{ listStyle: 'none'}}>
        <ul style={{ padding: 0, display: 'grid', gridTemplateColumns: 'repeat(8, auto)', gridTemplateRows: 'repeat(1, 55px)'}}>
          {row.map(piece => {
            
            return <PieceSpot key={`board-spot-${piece.key}`} piece={piece} rowIndex={index} />
          })}
        </ul>
      </li>
    })

    return boardHtmlDisplay
  }

  return (
    <div className="App">
      <h1>Checkers</h1>

      <h2>Player turn: {playerTurn.toUpperCase()}</h2>

      <ul style={{ padding: 0}}>
        {getBoardRows()}
      </ul>
    </div>
  );
}

export default App;
