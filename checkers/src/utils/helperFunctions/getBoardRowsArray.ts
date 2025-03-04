import { PieceInfoFE } from '../../types'

export function getBoardRowsArray(board: Object) {
    const boardDisplay: PieceInfoFE[][] = []
    Object.entries(board).forEach(([key, value]) => {
      const rowDetails: PieceInfoFE[] = []
      for (let i = 0; i < value.length; i++) {
        const positionKey = `${key}${value[i].position}`
        const positionObject: PieceInfoFE = {
          key: positionKey,
          piece: value[i].piece,
          isKing: value[i].isKing,
        }
        rowDetails.push(positionObject)
      }
      boardDisplay.push(rowDetails)
    })
    return boardDisplay
  }
