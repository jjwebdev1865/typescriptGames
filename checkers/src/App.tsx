import React from 'react';
import BoardStartingLayout from './utils/helperFunctions/boardStartSetup';
import { getBoardRowsArray } from './utils/helperFunctions/getBoardRowsArray';

export type PieceInfo = {
  position: number,
  piece: null
}

export type PieceInfoFE = {
  key: string
  piece: null
}

function App() {
  const board: Object = BoardStartingLayout()

  // TODO: Add styling - red and black alternating board pieces
  function getBoardRows() {
    const boardDisplay = getBoardRowsArray(board)
    const boardHtmlDisplay = boardDisplay.map(row => {
      const rowKey = row[0].key.split("")[0]

      return <li key={`board-row-${rowKey}`} style={{ listStyle: 'none'}}>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(8, auto)' }}>
          {row.map(piece => {
            return <div key={`board-spot-${piece.key}`}>{piece.key}</div>
          })}
        </ul>
      </li>
    })

    return boardHtmlDisplay
  }

  return (
    <div className="App">
      <h1>Checkers</h1>

      <ul>
        {getBoardRows()}
      </ul>
    </div>
  );
}

export default App;
