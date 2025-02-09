import { PieceMove } from "../../App"

interface ChessPieceProps {
  updatedMove: PieceMove
  move: string
  onClickMovePiece: (piece: PieceMove) => void
}

export const ChessPiece = ({ updatedMove, move, onClickMovePiece }: ChessPieceProps) => {
  const { disabled, piece } = updatedMove
  return (
    <li key={`available-move-${move}`} style={{ listStyle: 'none'}}>
      <button disabled={disabled} onClick={() => onClickMovePiece(updatedMove)}>{piece}</button>
    </li>
  )
}