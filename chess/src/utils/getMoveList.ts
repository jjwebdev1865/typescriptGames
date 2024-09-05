import { PieceInfo } from "../types/models"

export function GetMoveList
(
  piece: string, 
  pieceInfo: PieceInfo, 
  movePositions: string[], 
  isOpponentInPosition: (newPosition: string) => boolean,
  isPlayerPieceInPosition: (newPosition: string) => boolean
): any[] {
  const newMoveList: any[] = []
  movePositions.forEach(move => {
    const isOpponentPieceInPosition = isOpponentInPosition(move)
    const isMyPieceInPosition = isPlayerPieceInPosition(move)
    const newMove = [
      piece,
      {
        ...pieceInfo,
        position: move
      },
      (isMyPieceInPosition || isOpponentPieceInPosition) ? true : false
    ]
    newMoveList.push(newMove)
  })

  return newMoveList
}