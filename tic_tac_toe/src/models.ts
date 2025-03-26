export type PlayerOptions = 'P1' | 'P2'

export type SpotInfo = {
    isOpen: boolean
    player: PlayerOptions | null
}

export type BoardInfo = {
    [key: string]: SpotInfo
}

export type MatchWinner = {
    gameOne: PlayerOptions | null | ''
    gameTwo: PlayerOptions | null | ''
    gameThree: PlayerOptions | null | ''
}
