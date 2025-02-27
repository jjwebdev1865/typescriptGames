import React, { useState } from 'react';
import BoardStartingLayout from './utils/helperFunctions/boardStartSetup';
import { getBoardRowsArray } from './utils/helperFunctions/getBoardRowsArray';
import { useGame } from './context/gameContext';
import { getPlayerOneAttacks, getPlayerTwoAttacks } from './utils/moveFunctions/getAttackMoves';
import { CheckersPieceMove, Navbar, PieceSpot } from './component';
import { Board, GameType, PieceInfo, PieceInfoFE, PieceMove } from './types';
import { PlayerActionsContainer, StyledAvailableMovesList, StyledBoardRow, StyledBoardRowContainer } from './App.styles';
import { useMoves } from './context/movesContext';

function App() {
  const { playerTurn, setPlayerTurn, handleInitialBoardSetup, updateBoard, playerOnePieceCount, playerTwoPieceCount } = useGame()
  let initBoard: Board = BoardStartingLayout()
  initBoard = handleInitialBoardSetup(initBoard)

  const [ availableMoves, setAvailableMoves ] = useState<Array<string>>([])
  const [ selectedPiece, setSelectedPiece ] = useState<PieceInfoFE | undefined>(undefined)
  const [ board, setBoard ] = useState<Board>(initBoard)
  const [ showEndTurnButton, setShowEndTurnButton ] = useState(false)
  const [gameType, setGameType] = useState<GameType>(2)
  const { getPieceMoves } = useMoves()
  
    
  function getAttackMove(move: string): PieceMove | null {
    const optionOne = getPlayerOneAttacks(move, selectedPiece?.key as string)
    const optionTwo = getPlayerTwoAttacks(move, selectedPiece?.key as string)
    if (optionOne === '' && optionTwo === '') {
      return null
    }
    const correctOption = selectedPiece?.key.startsWith(optionOne.split("")[0]) ? optionTwo : optionOne
    const newMove = getAttackStatus(correctOption, move)
    return newMove
  }

  function getAttackStatus(attackMove: string, move: string): PieceMove {
    const [attackMoveKey, attackMovePosition] = attackMove.split("")
    const attackMoveSpot = board[attackMoveKey].find(checker => checker.position === Number(attackMovePosition))
    const isAttackDisabled =  attackMoveSpot.piece !== null
    return {
      piece: attackMove,
      type: 'attack',
      attackPieceToRemove: move,
      isKing: false,
      disabled: isAttackDisabled
    }
  }

  function getAvailableMoveOptions(move: string): PieceMove {
    const [avKey, avPosition] = move.split("")
    const boardRow = board[avKey]
    let newMove: PieceMove = {piece: move, disabled: false, type: 'move', isKing: (selectedPiece as PieceInfoFE).isKing}
    boardRow.forEach((br: PieceInfo) => {
      if (br.position === Number(avPosition) && br.piece !== null) {
        const playerTurnKey = playerTurn.split("")[1]
        if ((selectedPiece as PieceInfoFE).isKing) {
          if (Number(playerTurnKey) !== br.piece) {
            const attack = getAttackMove(move)
            if (attack !== null) {
              newMove = attack
            } else {
              newMove.disabled = true
            }
          }
          newMove.isKing = true
        } else if (Number(playerTurnKey) !== br.piece) {
          const attackMove = playerTurn === 'p1' ? getPlayerOneAttacks(move, selectedPiece?.key as string) : getPlayerTwoAttacks(move, selectedPiece?.key as string)
          if (attackMove !== '') {
            newMove = getAttackStatus(attackMove, move)
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

  const changePlayerTurn = (playerTurn: string) => playerTurn === 'p1' ? setPlayerTurn('p2') : setPlayerTurn('p1')

  const handleEndTurn = () => {
    changePlayerTurn(playerTurn)
    setShowEndTurnButton(false)
  }

  const onClickMovePiece = (piece: PieceMove) => {
    const newBoard: Board = updateBoard(selectedPiece as PieceInfoFE, board, piece, playerTurn)
    setBoard(newBoard)
    setAvailableMoves([])
    if (piece.type === 'attack') {
      const [pieceKey, piecePosition] = piece.piece.split("")
      const newPiece = newBoard[pieceKey].find(item => item.position === Number(piecePosition))
      
      const frontEndPiece: PieceInfoFE = {
        key: piece.piece,
        piece: newPiece.piece,
        isKing: newPiece.isKing,
      }
      setSelectedPiece(frontEndPiece)
      const moveOptions = getPieceMoves(frontEndPiece)
      setAvailableMoves(moveOptions)
      setShowEndTurnButton(true)
      // TODO: update to disable pieces if follow up move isnt available. cannot move at this point
      // TODO: if this gets to the spot where a piece is kinged, this breaks
    } else {
      setSelectedPiece(undefined)
      changePlayerTurn(playerTurn)
    }
  }

  return (
    <div className="App">
      <Navbar playerTurn={playerTurn} gameType={gameType} setGameType={setGameType} />

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
                return <CheckersPieceMove key={`available-move-piece-${move}`} updatedMove={updatedMove} onClickMovePiece={onClickMovePiece} />
              })}
              {showEndTurnButton && <button onClick={handleEndTurn}>End Turn</button>}
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
