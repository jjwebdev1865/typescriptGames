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
  let blockedLetter = ''
  movePositions.forEach(move => {
    const isOpponentPieceInPosition = isOpponentInPosition(move)
    const isMyPieceInPosition = isPlayerPieceInPosition(move)
    let isPieceBlockingTheWay = false
    if (isMyPieceInPosition && pieceInfo.name.toLocaleLowerCase() === 'rook') {
      blockedLetter = move.split('')[0]
    }
    if (pieceInfo.name.toLocaleLowerCase() === 'rook' && move.split('')[0] === blockedLetter) {
      isPieceBlockingTheWay = true
    }

    const newMove = [
      piece,
      {
        ...pieceInfo,
        position: move
      },
      (isMyPieceInPosition || isOpponentPieceInPosition || isPieceBlockingTheWay) ? true : false
    ]
    newMoveList.push(newMove)
  })

  return newMoveList
}