import { PieceMove } from '../../types'
import { ChessPieceMoveItem } from './checkersPieceMove.styles'

interface ChessPieceMoveProps {
  updatedMove: PieceMove
  onClickMovePiece: (piece: PieceMove) => void
}

export const CheckersPieceMove = ({ updatedMove,  onClickMovePiece }: ChessPieceMoveProps) => {
  const { disabled, piece } = updatedMove
  return (
    <ChessPieceMoveItem data-testid={`checkers-piece-move-${updatedMove.piece}`} >
      <button disabled={disabled} onClick={() => onClickMovePiece(updatedMove)}>
        {piece}
      </button>
    </ChessPieceMoveItem>
  )
}