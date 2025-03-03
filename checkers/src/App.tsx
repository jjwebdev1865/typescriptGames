import React, { useEffect, useState } from 'react';
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
  const [ isPreviousMoveAttack, setIsPreviousMoveAttack ] = useState(false)
  const [showMoves, setShowMoves] = useState(true)

  useEffect(() => {
    if (playerOnePieceCount === 0 || playerTwoPieceCount === 0) {
      setShowMoves(false)
    }
  }, [playerOnePieceCount, playerTwoPieceCount])
  
    
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
            attack !== null ? newMove = attack : newMove.disabled = true
          }
          newMove.isKing = true
        } else if (Number(playerTurnKey) !== br.piece) {
          const attackMove = playerTurn === 'p1' ? getPlayerOneAttacks(move, selectedPiece?.key as string) : getPlayerTwoAttacks(move, selectedPiece?.key as string)
          attackMove !== '' ? newMove = getAttackStatus(attackMove, move) : newMove.disabled = true
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
    setAvailableMoves([])
    changePlayerTurn(playerTurn)
    setShowEndTurnButton(false)
    setIsPreviousMoveAttack(false)
  }

  const onClickMovePiece = (piece: PieceMove) => {
    const newBoard: Board = updateBoard(selectedPiece as PieceInfoFE, board, piece, playerTurn)
    setBoard(newBoard)
    setAvailableMoves([])
    if (piece.attackPieceToRemove) {
      setIsPreviousMoveAttack(true)
    }
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
    } else {
      setSelectedPiece(undefined)
      changePlayerTurn(playerTurn)
    }
  }

  // TODO: unit test this when context tests are figured out
  const getBoardConfig = () => {
    if (playerOnePieceCount === 0 || playerTwoPieceCount === 0) {
      return (
        <strong>Player has won the game. Restart game to play again!</strong>
      )
    }

    return (
      <ul style={{ padding: 0}}>
        {board === undefined ? getBoardRows(initBoard) : getBoardRows(board)}
      </ul>
    )
  }

  return (
    <div className="App">
      <Navbar playerTurn={playerTurn} gameType={gameType} setGameType={setGameType} />
      {getBoardConfig()}

      {showMoves && (
        <PlayerActionsContainer>
          <div>
            <h3>Available Moves for {selectedPiece?.key}</h3>
            {availableMoves.length > 0 && (
              <StyledAvailableMovesList>
                {availableMoves.map(move => {
                  const updatedMove = getAvailableMoveOptions(move)
                  if (isPreviousMoveAttack && (updatedMove.disabled || updatedMove.type === 'move')) {
                    // TODO: somehow need to trigger a auto player turn change
                    updatedMove.disabled = true
                  }
                  return <CheckersPieceMove key={`available-move-piece-${move}`} updatedMove={updatedMove} onClickMovePiece={onClickMovePiece} />
                })}
                {showEndTurnButton && <button data-testid="available-moves-end-turn-button" onClick={handleEndTurn}>End Turn</button>}
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
      )}
    </div>
  );
}

export default App;
