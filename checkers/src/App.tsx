import React from 'react';
import BoardStartingLayout from './utils/helperFunctions/boardStartSetup';
import { getBoardRowsArray } from './utils/helperFunctions/getBoardRowsArray';
import { PieceSpot } from './component/PieceSpot/pieceSpot';
import { useGame } from './context/gameContext';

export type PieceInfo = {
  position: number,
  piece: null
}

export type PieceInfoFE = {
  key: string
  piece: null
}

export interface Board {
  [key: string]: any[],
}

function App() {
  const { playerTurn, handleInitialBoardSetup}  = useGame()
  let board: Board | string = BoardStartingLayout()
  board = handleInitialBoardSetup(board as Board)
  // TODO: will see row H has a row full of pieces. Need to show them on the board now
  console.log('board', board)

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
