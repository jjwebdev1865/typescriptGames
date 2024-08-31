export type Player = {
    playerName: string
    shortName: 'p1' | 'p2'
    pieces: Pieces
}

export type Pieces = {
    king: string,
    queen: string;
    rookOne: string
    rookTwo: string
    pawnOne: string
    pawnTwo: string
    pawnThree: string
    pawnFour: string
    pawnFive: string
    pawnSix: string
    pawnSeven: string
    pawnEight: string
}
