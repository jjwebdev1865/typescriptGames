export type Player = {
    playerName: string
    shortName: 'p1' | 'p2'
    pieces: Pieces
    graveyard: string[]
}

export type Pieces = {
    pawnOne: PieceInfo
    pawnTwo: PieceInfo
    pawnThree: PieceInfo
    pawnFour: PieceInfo
    pawnFive: PieceInfo
    pawnSix: PieceInfo
    pawnSeven: PieceInfo
    pawnEight: PieceInfo
    knightOne: PieceInfo
    knightTwo: PieceInfo
    rookOne: PieceInfo
    rookTwo: PieceInfo
    bishopOne: PieceInfo
    bishopTwo: PieceInfo
    king: PieceInfo
}

export type PieceInfo = {
    name: "Pawn" | 'Knight' | 'Rook' | 'Bishop' | 'King' | 'Queen',
    position: string
}