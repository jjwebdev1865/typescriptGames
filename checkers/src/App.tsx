import React, { useState } from 'react';
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

type PieceMove = {
  piece: string
  disabled: boolean
}

export interface Board {
  [key: string]: any[],
}

function App() {
  const { playerTurn, setPlayerTurn, handleInitialBoardSetup, updateBoard } = useGame()
  let initBoard: Board = BoardStartingLayout()
  initBoard = handleInitialBoardSetup(initBoard as Board)

  const [ availableMoves, setAvailableMoves ] = useState<Array<string>>([])
  const [ selectedPiece, setSelectedPiece ] = useState<PieceInfoFE | undefined>(undefined)
  const [ board, setBoard ] = useState<Board>(initBoard)

  function getDisabledMoves(move: string): PieceMove{
    const [avKey, avPosition] = move.split("")
    const boardRow = board[avKey]
    let newMove: PieceMove = {piece: move, disabled: false}
    boardRow.forEach((br: PieceInfo) => {
      if (br.position === Number(avPosition) && br.piece !== null) {
        // TODO: future add attack stuff here
        newMove = {
          ...newMove,
          disabled: true
        }
      }
    })
    return newMove
  }

  function getBoardRows(board: Board) {
    const boardDisplay = getBoardRowsArray(board)
    const boardHtmlDisplay = boardDisplay.map((row, index) => {
      const rowKey = row[0].key.split("")[0]

      return <li key={`board-row-${rowKey}`} style={{ listStyle: 'none'}}>
        <ul style={{ padding: 0, display: 'grid', gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', gridTemplateRows: 'repeat(1, 55px)'}}>
          {row.map(piece => {
            
            return <PieceSpot 
              key={`board-spot-${piece.key}`} 
              checkerPiece={piece} 
              rowIndex={index} 
              setAvailableMoves={setAvailableMoves}
              setSelectedPiece={setSelectedPiece}
            />
          })}
        </ul>
      </li>
    })

    return boardHtmlDisplay
  }

  const onClickMovePiece = (move: string) => {
    const newBoard: Board = updateBoard(selectedPiece as PieceInfoFE, board, move)
    setBoard(newBoard)
    setAvailableMoves([])
    setSelectedPiece(undefined)
    if (playerTurn === 'p1') {
      setPlayerTurn('p2')
    } else {
      setPlayerTurn('p1')
    }
  }

  return (
    <div className="App">
      <h1>Checkers</h1>

      <h2>Player turn: {playerTurn.toUpperCase()}</h2>

      <ul style={{ padding: 0}}>
        {board === undefined ? getBoardRows(initBoard) : getBoardRows(board)}
      </ul>

      <div>
        <h3>Available Moves for {selectedPiece?.key}</h3>
        {availableMoves.length > 0 && (
          <ul>
            {availableMoves.map(move => {
              const updatedMove = getDisabledMoves(move)
              return (
                <li key={`available-move-${move}`} style={{ listStyle: 'none'}}>
                  <button disabled={updatedMove.disabled} onClick={() => onClickMovePiece(move)}>{move}</button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
