import React, { useState } from 'react';
import BoardStartingLayout from './utils/helperFunctions/boardStartSetup';
import { getBoardRowsArray } from './utils/helperFunctions/getBoardRowsArray';
import { useGame } from './context/gameContext';
import { getPlayerOneAttacks, getPlayerTwoAttacks } from './utils/moveFunctions/getAttackMoves';
import { ChessPieceMove, PieceSpot } from './component';
import { Board, PieceInfo, PieceInfoFE, PieceMove } from './types';
import { PlayerActionsContainer, StyledAvailableMovesList, StyledBoardRow, StyledBoardRowContainer } from './App.styles';

function App() {
  const { playerTurn, setPlayerTurn, handleInitialBoardSetup, updateBoard, playerOnePieceCount, playerTwoPieceCount } = useGame()
  let initBoard: Board = BoardStartingLayout()
  initBoard = handleInitialBoardSetup(initBoard)

  const [ availableMoves, setAvailableMoves ] = useState<Array<string>>([])
  const [ selectedPiece, setSelectedPiece ] = useState<PieceInfoFE | undefined>(undefined)
  const [ board, setBoard ] = useState<Board>(initBoard)

  function getAvailableMoveOptions(move: string): PieceMove {
    const [avKey, avPosition] = move.split("")
    const boardRow = board[avKey]
    let newMove: PieceMove = {piece: move, disabled: false, type: 'move', isKing: (selectedPiece as PieceInfoFE).isKing}
    boardRow.forEach((br: PieceInfo) => {
      if (br.position === Number(avPosition) && br.piece !== null) {
        const playerTurnKey = playerTurn.split("")[1]
        if ((selectedPiece as PieceInfoFE).isKing) {
          newMove.isKing = true
        } else if (Number(playerTurnKey) !== br.piece) {
          const attackMove = playerTurn === 'p1' ? getPlayerOneAttacks(move, selectedPiece?.key as string) : getPlayerTwoAttacks(move, selectedPiece?.key as string)
          if (attackMove !== '') {
            const [attackMoveKey, attackMovePosition] = attackMove.split("")
            const attackMoveSpot = board[attackMoveKey].find(checker => checker.position === Number(attackMovePosition))
            const isAttackDisabled =  attackMoveSpot.piece !== null
            newMove = {
              piece: attackMove,
              type: 'attack',
              attackPieceToRemove: move,
              isKing: false,
              disabled: isAttackDisabled
            }
          } else {
            newMove.disabled = true
          }
        } else {
          newMove.disabled = true
        }
      }
    })
    return newMove
  }

  function getBoardRows(board: Board) {
    const boardDisplay = getBoardRowsArray(board)
    const boardHtmlDisplay = boardDisplay.map((row, index) => {
      const rowKey = row[0].key.split("")[0]

      return <StyledBoardRowContainer key={`board-row-${rowKey}`}>
        <StyledBoardRow>
          {row.map(piece => {
            return <PieceSpot 
              key={`board-spot-${piece.key}`} 
              checkerPiece={piece} 
              rowIndex={index} 
              setAvailableMoves={setAvailableMoves}
              setSelectedPiece={setSelectedPiece}
            />
          })}
        </StyledBoardRow>
      </StyledBoardRowContainer>
    })

    return boardHtmlDisplay
  }

  const onClickMovePiece = (piece: PieceMove) => {
    const newBoard: Board = updateBoard(selectedPiece as PieceInfoFE, board, piece, playerTurn)
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

      <PlayerActionsContainer>
        <div>
          <h3>Available Moves for {selectedPiece?.key}</h3>
          {availableMoves.length > 0 && (
            <StyledAvailableMovesList>
              {availableMoves.map(move => {
                const updatedMove = getAvailableMoveOptions(move)
                return <ChessPieceMove key={`available-move-piece-${move}`} updatedMove={updatedMove} onClickMovePiece={onClickMovePiece} />
              })}
            </StyledAvailableMovesList>
          )}
        </div>
        <div>
          <h3>Piece count</h3>
          <div>
            <p><strong>Player One:</strong> {playerOnePieceCount}</p>
          </div>
          <div>
            <p><strong>Player Two:</strong> {playerTwoPieceCount}</p>
          </div>
        </div>
      </PlayerActionsContainer>
    </div>
  );
}

export default App;
