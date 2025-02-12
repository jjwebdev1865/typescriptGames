import { PieceMove } from "../../types"
import { ChessPieceMoveItem } from "./chessPiece.styles"

interface ChessPieceMoveProps {
  updatedMove: PieceMove
  onClickMovePiece: (piece: PieceMove) => void
}

export const ChessPieceMove = ({ updatedMove,  onClickMovePiece }: ChessPieceMoveProps) => {
  const { disabled, piece } = updatedMove
  return (
    <ChessPieceMoveItem>
      <button disabled={disabled} onClick={() => onClickMovePiece(updatedMove)}>{piece}</button>
    </ChessPieceMoveItem>
  )
}