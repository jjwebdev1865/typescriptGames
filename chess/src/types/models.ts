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
}

export type PieceInfo = {
    name: string,
    position: string
}
