export type PlayerOptions = 'P1' | 'P2'

export type SpotInfo = {
    isOpen: boolean
}

export type BoardInfo = {
    [key: string]: SpotInfo
}