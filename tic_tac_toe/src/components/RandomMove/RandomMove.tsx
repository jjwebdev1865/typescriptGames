import { Dispatch, JSX, SetStateAction } from 'react'
import { useBoard } from '../../context/boardContext'
import { BoardInfo } from '../../models'

interface RandomMoveProps {
  gameCount: number
  handlePieceMove: (move: string, gamePieces: BoardInfo, setGamePieces: (newBoard: BoardInfo) => void) => void
  handleMovesChange: (move: string, moveOptions: string[], setAvMoves: (newAvailableMoves: string[]) => void) => void
  // TODO: fix later. both have a null option and also just a single instance
  setPieces: Dispatch<SetStateAction<any>>
  setAvMoves: Dispatch<SetStateAction<any>>
}

export const RandomMove = ({gameCount, handlePieceMove, handleMovesChange, setPieces, setAvMoves}: RandomMoveProps): JSX.Element => {
  const { gamePieces, secondGamePieces, thirdGamePieces, currentAvMoves} = useBoard()
  let avMoves: string[] = []
  let pieces: BoardInfo = {}

  if (currentAvMoves && gameCount === 1) {
    avMoves = currentAvMoves
    pieces = gamePieces
  } else if (currentAvMoves && gameCount === 2 && secondGamePieces !== null) {
    avMoves = currentAvMoves
    pieces = secondGamePieces
  } else if (currentAvMoves && gameCount === 3 && thirdGamePieces !== null) {
    avMoves = currentAvMoves
    pieces = thirdGamePieces
  }

  function getComputerDecision(moveOptions: string[]) {
    const randomNumber = Math.floor(Math.random() * moveOptions.length)
    return moveOptions[randomNumber]
  }

  return (
    <button
      data-testid={`random-move-btn-game-${gameCount}`}
      onClick={() => {
        const move = getComputerDecision(avMoves)
        handlePieceMove(move, pieces, setPieces)
        handleMovesChange(move, avMoves as string[], setAvMoves)
      }}
    >
      Click For Random Move
    </button>
  )
}
