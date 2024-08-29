export type Player = {
    playerName: string
    shortName: 'p1' | 'p2'
    pieces: {
        king: string,
        queen: string;
        rookOne: string
        rookTwo: string
    }
}