import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { BoardInfo, PlayerOptions, SpotInfo } from '../models';

interface PlayerContextType {
  playerTurn: PlayerOptions
  setPlayerTurn: Dispatch<SetStateAction<"P1" | "P2">>
  determinePlayerWin: (gamePieces: BoardInfo) => void
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

interface PlayerProviderProps {
  children: React.ReactNode
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({children}) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerOptions>('P1')

  function pieceCombination(value: SpotInfo, secondSpot: SpotInfo, thirdSpot: SpotInfo): boolean {
    if (secondSpot.player === value.player && thirdSpot.player === value.player) {
      return true
    } else {
      return false
    }
  }

  // TODO: make more dynamic
  function determinePlayerWin(gamePieces: BoardInfo): PlayerOptions | null {
    let playerWin: PlayerOptions | null = null
    Object.entries(gamePieces).forEach(([ key, value ]) => {
      if (key === 'A1') {
        if (gamePieces['A2'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A2'], gamePieces['A3']) ? value.player : null
        } else if (gamePieces['B2'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['C3']) ? value.player : null
        } else if (gamePieces['B1'].player === value.player && gamePieces['C1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B1'], gamePieces['C1']) ? value.player : null
        }
      } else if (key === 'A2') {
        if (gamePieces['B2'].player === value.player && gamePieces['C2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['C2']) ? value.player : null
        } else if (gamePieces['A1'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A1'], gamePieces['A3']) ? value.player : null
        }
      } else if (key === 'A3') {
        if (gamePieces['A2'].player === value.player && gamePieces['A1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A2'], gamePieces['A1']) ? value.player : null
        } else if (gamePieces['B2'].player === value.player && gamePieces['C1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['C1']) ? value.player : null
        } else if (gamePieces['B3'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B3'], gamePieces['C3']) ? value.player : null
        }
      } else if (key === 'B1') {
        if (gamePieces['B2'].player === value.player && gamePieces['B3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['B3']) ? value.player : null
        } else if (gamePieces['A1'].player === value.player && gamePieces['C1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A1'], gamePieces['C1']) ? value.player : null
        }
      } else if (key === 'B2') {
        if (gamePieces['B1'].player === value.player && gamePieces['B3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B1'], gamePieces['B3']) ? value.player : null
        } else if (gamePieces['A2'].player === value.player && gamePieces['C2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A2'], gamePieces['C2']) ? value.player : null
        }
      } else if (key === 'B3') {
        if (gamePieces['B2'].player === value.player && gamePieces['B1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['B1']) ? value.player : null
        } else if (gamePieces['A3'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A3'], gamePieces['C3']) ? value.player : null
        }
      } else if (key === 'C1') {
        if (gamePieces['A1'].player === value.player && gamePieces['B1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A1'], gamePieces['B1']) ? value.player : null
        } else if (gamePieces['B2'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['A3']) ? value.player : null
        } else if (gamePieces['C2'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['C2'], gamePieces['C3']) ? value.player : null
        }
      } else if (key === 'C2') {
        if (gamePieces['C1'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['C1'], gamePieces['C3']) ? value.player : null
        } else if (gamePieces['B2'].player === value.player && gamePieces['A2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['A2']) ? value.player : null
        }
      } else if (key === 'C3') {
        if (gamePieces['C1'].player === value.player && gamePieces['C2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['C1'], gamePieces['C2']) ? value.player : null
        } else if (gamePieces['B2'].player === value.player && gamePieces['A1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['A1']) ? value.player : null
        } else if (gamePieces['B3'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B3'], gamePieces['A3']) ? value.player : null
        }
      }
    })
    console.log(`playerWin: ${playerWin}`)
    return playerWin
  }
  
  return <PlayerContext.Provider value={{ playerTurn, setPlayerTurn, determinePlayerWin }}>
     {children}
  </PlayerContext.Provider>
}

// Custom hook to use the useBoard
export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('useCounter must be used within a MovesProvider');
  }
  return context;
};
