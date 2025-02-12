export type PieceInfo = {
    position: number,
    piece: number | null,
    isKing: boolean
  }
  
  export type PieceInfoFE = {
    key: string
    piece: null | number
  }
  
  export type MoveType = 'move' | 'attack'
  export type PieceMove = {
    piece: string
    disabled: boolean,
    type: MoveType,
    attackPieceToRemove?: string
    isKing: boolean
  }
  
  export interface Board {
    [key: string]: any[],
  }