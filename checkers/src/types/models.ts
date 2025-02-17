  // One = one manual player and AI
  // Two = two manual players
  export type GameType = 1 | 2
  export type MoveType = 'move' | 'attack'
  export type PlayerTurn = 'p1' | 'p2'

export type PieceInfo = {
    position: number,
    piece: number | null,
    isKing: boolean
  }
  
  export type PieceInfoFE = {
    key: string
    piece: null | number
    isKing: boolean
  }
  
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
  