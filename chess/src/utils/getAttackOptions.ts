import { PieceInfo } from "../types/models"

export function GetAttackList(piece: string, pieceInfo: PieceInfo, attackPositions: string[], newMoveList: any[], isOpponentInPosition: (newPosition: string) => boolean) {
  const attackOptionsList: any[] = []
  attackPositions.forEach(attack => {
    const isOpponentPieceInPosition = isOpponentInPosition(attack)
    newMoveList.forEach((move) => {
      const movePieceInfo = move[1] as PieceInfo
      
      if (movePieceInfo.position === attack && isOpponentPieceInPosition) {
        attackOptionsList.push([
          piece,
          {
            ...pieceInfo,
            position: attack
          },
          true 
        ])
      } 
    })
  })

  return attackOptionsList
}

export function GetPawnAttackList(piece: string, pieceInfo: PieceInfo, attackPositions: string[], isOpponentInPosition: (newPosition: string) => boolean) {
  const attackOptionsList: any[] = []
  attackPositions.forEach(attack => {
    const isOpponentPieceInPosition = isOpponentInPosition(attack)
    attackOptionsList.push([
      piece,
      {
        ...pieceInfo,
        position: attack
      },
      isOpponentPieceInPosition ? true : false 
    ])
  })
  return attackOptionsList
}