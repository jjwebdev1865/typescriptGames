import { PieceInfo } from "../../types"

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function BoardStartingLayout() {
  const board = {} as any
  for (let i = 0; i< rows.length; i++) {
    const rowObj: PieceInfo[] = []
    for (let j = 1; j <= 8; j++) {
      const piece: PieceInfo = {
        position: j,
        piece: null
      }
      rowObj.push(piece)
    }
    board[rows[i]] = rowObj
  }
  return board
}