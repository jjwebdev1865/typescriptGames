import React, { useState } from 'react';
import BoardStartingLayout from './utils/helperFunctions/boardStartSetup';
import { getBoardRowsArray } from './utils/helperFunctions/getBoardRowsArray';
import { PieceSpot } from './component/PieceSpot/pieceSpot';
import { useGame } from './context/gameContext';
import { getPlayerOneAttacks, getPlayerTwoAttacks } from './utils/moveFunctions/getAttackMoves';
import { ChessPiece } from './component';
import { Board, PieceInfo, PieceInfoFE, PieceMove } from './types';


function App() {
  const { playerTurn, setPlayerTurn, handleInitialBoardSetup, updateBoard, playerOnePieceCount, playerTwoPieceCount } = useGame()
  let initBoard: Board = BoardStartingLayout()
  initBoard = handleInitialBoardSetup(initBoard as Board)

  const [ availableMoves, setAvailableMoves ] = useState<Array<string>>([])
  const [ selectedPiece, setSelectedPiece ] = useState<PieceInfoFE | undefined>(undefined)
  const [ board, setBoard ] = useState<Board>(initBoard)

  function getAvailableMoveOptions(move: string): PieceMove {
    const [avKey, avPosition] = move.split("")
    const boardRow = board[avKey]
    let newMove: PieceMove = {piece: move, disabled: false, type: 'move'}
    boardRow.forEach((br: PieceInfo) => {
      if (br.position === Number(avPosition) && br.piece !== null) {
        const playerTurnKey = playerTurn.split("")[1]
        if (Number(playerTurnKey) !== br.piece) {
          const attackMove = playerTurn === 'p1' ?  getPlayerOneAttacks(move, selectedPiece?.key as string) : getPlayerTwoAttacks(move, selectedPiece?.key as string)
          newMove = {
            piece: attackMove,
            disabled: false,
            type: 'attack',
            attackPieceToRemove: move
          }
        } else {
          newMove = {
            ...newMove,
            disabled: true
          }
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

  const onClickMovePiece = (piece: PieceMove) => {
    const newBoard: Board = updateBoard(selectedPiece as PieceInfoFE, board, piece)
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

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 25%'}}>
        <div>
          <h3>Available Moves for {selectedPiece?.key}</h3>
          {availableMoves.length > 0 && (
            <ul>
              {availableMoves.map(move => {
                const updatedMove = getAvailableMoveOptions(move)
                return <ChessPiece key={`available-move-piece-${move}`} updatedMove={updatedMove} move={move} onClickMovePiece={onClickMovePiece} />
              })}
            </ul>
          )}
        </div>
        <div>
          <h3>Piece count</h3>
          <div>
            <p><strong>Player One:</strong> {playerOnePieceCount}</p>
          </div>
          <div>
            <p><strong>Player Twu:</strong> {playerTwoPieceCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
