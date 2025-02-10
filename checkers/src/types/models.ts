export type PieceInfo = {
    position: number,
    piece: number | null
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
  }
  
  export interface Board {
    [key: string]: any[],
  }