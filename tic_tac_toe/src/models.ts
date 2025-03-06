export type PlayerOptions = 'P1' | 'P2'

export type SpotInfo = {
    isOpen: boolean
    player: PlayerOptions | null
}

export type BoardInfo = {
    [key: string]: SpotInfo
}

export type GameCount = {
    [key: number]: PlayerOptions | null
}