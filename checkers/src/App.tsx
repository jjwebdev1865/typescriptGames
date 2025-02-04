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
        <ul style={{ padding: 0, display: 'grid', gridTemplateColumns: 'repeat(8, auto)' }}>
          {row.map(piece => {
            const pieceNumber = piece.key.split("")[1]
            let backgroundColor = '#F5E6D3'
            let textColor = 'black'
            if (Number(pieceNumber)  % 2 === 0) {
              backgroundColor = '#3D2B1F'
              textColor = '#FFFFFF'
            }
            return <li 
              key={`board-spot-${piece.key}`} 
              style={{ 
                listStyle: 'none', 
                backgroundColor: backgroundColor,
                color: textColor,
                textAlign: 'center'
              }}
              >
                {piece.key}
              </li>
          })}
        </ul>
      </li>
    })

    return boardHtmlDisplay
  }

  return (
    <div className="App">
      <h1>Checkers</h1>

      <ul style={{ padding: 0}}>
        {getBoardRows()}
      </ul>
    </div>
  );
}

export default App;
