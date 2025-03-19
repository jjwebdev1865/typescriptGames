import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { BoardInfo, PlayerOptions, SpotInfo } from '../models';

interface PlayerContextType {
  playerTurn: PlayerOptions | null
  setPlayerTurn: Dispatch<SetStateAction<PlayerOptions | null>>
  determinePlayerWin: (gamePieces: BoardInfo) => PlayerOptions | null
  determineGameTwoPlayerWin: (gamePieces: BoardInfo) => PlayerOptions | null
  determineGameThreePlayerWin: (gamePieces: BoardInfo) => PlayerOptions | null
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

interface PlayerProviderProps {
  children: React.ReactNode
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({children}) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerOptions | null>('P1')

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
          return playerWin
        } else if (gamePieces['B2'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['C3']) ? value.player : null
          return playerWin
        } else if (gamePieces['B1'].player === value.player && gamePieces['C1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B1'], gamePieces['C1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'A2') {
        if (gamePieces['B2'].player === value.player && gamePieces['C2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['C2']) ? value.player : null
          return playerWin
        } else if (gamePieces['A1'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A1'], gamePieces['A3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'A3') {
        if (gamePieces['A2'].player === value.player && gamePieces['A1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A2'], gamePieces['A1']) ? value.player : null
          return playerWin
        } else if (gamePieces['B2'].player === value.player && gamePieces['C1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['C1']) ? value.player : null
          return playerWin
        } else if (gamePieces['B3'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B3'], gamePieces['C3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'B1') {
        if (gamePieces['B2'].player === value.player && gamePieces['B3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['B3']) ? value.player : null
          return playerWin
        } else if (gamePieces['A1'].player === value.player && gamePieces['C1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A1'], gamePieces['C1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'B2') {
        if (gamePieces['B1'].player === value.player && gamePieces['B3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B1'], gamePieces['B3']) ? value.player : null
          return playerWin
        } else if (gamePieces['A2'].player === value.player && gamePieces['C2'].player === value.player) {
          playerWin =  pieceCombination(value, gamePieces['A2'], gamePieces['C2']) ? value.player : null
          return playerWin
        }
      } else if (key === 'B3') {
        if (gamePieces['B2'].player === value.player && gamePieces['B1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['B1']) ? value.player : null
          return playerWin
        } else if (gamePieces['A3'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A3'], gamePieces['C3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'C1') {
        if (gamePieces['A1'].player === value.player && gamePieces['B1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['A1'], gamePieces['B1']) ? value.player : null
          return playerWin
        } else if (gamePieces['B2'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['A3']) ? value.player : null
          return playerWin
        } else if (gamePieces['C2'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['C2'], gamePieces['C3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'C2') {
        if (gamePieces['C1'].player === value.player && gamePieces['C3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['C1'], gamePieces['C3']) ? value.player : null
          return playerWin
        } else if (gamePieces['B2'].player === value.player && gamePieces['A2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['A2']) ? value.player : null
          return playerWin
        }
      } else if (key === 'C3') {
        if (gamePieces['C1'].player === value.player && gamePieces['C2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['C1'], gamePieces['C2']) ? value.player : null
          return playerWin
        } else if (gamePieces['B2'].player === value.player && gamePieces['A1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B2'], gamePieces['A1']) ? value.player : null
          return playerWin
        } else if (gamePieces['B3'].player === value.player && gamePieces['A3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['B3'], gamePieces['A3']) ? value.player : null
          return playerWin
        }
      }
    })
    return playerWin
  }

  function determineGameTwoPlayerWin(gamePieces: BoardInfo) {
    let playerWin: PlayerOptions | null = null
    Object.entries(gamePieces).forEach(([ key, value]) => {
      if (key === 'D1') {
        if (gamePieces['D2'].player === value.player && gamePieces['D3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['D2'], gamePieces['D3']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['F3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['F3']) ? value.player : null
          return playerWin
        } else if (gamePieces['E1'].player === value.player && gamePieces['F1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E1'], gamePieces['F1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'D2') {
        if (gamePieces['D1'].player === value.player && gamePieces['D3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['D1'], gamePieces['D3']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['F2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['F2']) ? value.player : null
          return playerWin
        }
      } else if (key === 'D3') {
        if (gamePieces['D2'].player === value.player && gamePieces['D1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['D2'], gamePieces['D1']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['F1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['F1']) ? value.player : null
          return playerWin
        } else if (gamePieces['E3'].player === value.player && gamePieces['F3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E3'], gamePieces['F3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'E1') {
        if (gamePieces['E2'].player === value.player && gamePieces['E3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['E3']) ? value.player : null
          return playerWin
        } else if (gamePieces['D1'].player === value.player && gamePieces['F1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['D1'], gamePieces['F1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'E2') {
        if (gamePieces['D2'].player === value.player && gamePieces['F2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['D2'], gamePieces['F2']) ? value.player : null
          return playerWin
        } else if (gamePieces['E1'].player === value.player && gamePieces['E3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E1'], gamePieces['E3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'E3') {
        if (gamePieces['D3'].player === value.player && gamePieces['F3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['D3'], gamePieces['F3']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['E1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['E1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'F1') {
        if (gamePieces['F2'].player === value.player && gamePieces['F3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['F2'], gamePieces['F3']) ? value.player : null
          return playerWin
        } else if (gamePieces['E1'].player === value.player && gamePieces['D1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E1'], gamePieces['D1']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['D3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['D3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'F2') {
        if (gamePieces['F1'].player === value.player && gamePieces['F3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['F1'], gamePieces['F3']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['D2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['D2']) ? value.player : null
          return playerWin
        }
      } else if (key === 'F3') {
        if (gamePieces['F2'].player === value.player && gamePieces['F1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['F2'], gamePieces['F1']) ? value.player : null
          return playerWin
        } else if (gamePieces['E2'].player === value.player && gamePieces['D1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E2'], gamePieces['D1']) ? value.player : null
          return playerWin
        } else if (gamePieces['E3'].player === value.player && gamePieces['D3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['E3'], gamePieces['D3']) ? value.player : null
          return playerWin
        }
      }
    })

    return playerWin
  }

  function determineGameThreePlayerWin(gamePieces: BoardInfo) {
    let playerWin: PlayerOptions | null = null
    Object.entries(gamePieces).forEach(([ key, value ]) => {
      if (key === 'G1') {
        if (gamePieces['G2'].player === value.player && gamePieces['G2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['G2'], gamePieces['G3']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['I3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['I3']) ? value.player : null
          return playerWin
        } else if (gamePieces['H1'].player === value.player && gamePieces['I1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H1'], gamePieces['I1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'G2') {
        if (gamePieces['G1'].player === value.player && gamePieces['G3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['G1'], gamePieces['G3']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['I2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['I2']) ? value.player : null
          return playerWin
        }
      } else if (key === 'G3') {
        if (gamePieces['G2'].player === value.player && gamePieces['G1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['G2'], gamePieces['G1']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['I1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['I1']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['I3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H3'], gamePieces['I3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'H1') {
        if (gamePieces['H2'].player === value.player && gamePieces['H3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['H3']) ? value.player : null
          return playerWin
        } else if (gamePieces['G1'].player === value.player && gamePieces['I1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['G1'], gamePieces['I1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'H2') {
        if (gamePieces['G2'].player === value.player && gamePieces['I2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['G2'], gamePieces['I2']) ? value.player : null
          return playerWin
        } else if (gamePieces['H1'].player === value.player && gamePieces['H3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H1'], gamePieces['H3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'H3') {
        if (gamePieces['G3'].player === value.player && gamePieces['I3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['G3'], gamePieces['I3']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['H1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['H1']) ? value.player : null
          return playerWin
        }
      } else if (key === 'I1') {
        if (gamePieces['I2'].player === value.player && gamePieces['I3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['I2'], gamePieces['I3']) ? value.player : null
          return playerWin
        } else if (gamePieces['H1'].player === value.player && gamePieces['G1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H1'], gamePieces['G1']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['G3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['G3']) ? value.player : null
          return playerWin
        }
      } else if (key === 'I2') {
        if (gamePieces['I1'].player === value.player && gamePieces['I3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['I1'], gamePieces['I3']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['G2'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['G2']) ? value.player : null
          return playerWin
        }
      } else if (key === 'I3') {
        if (gamePieces['I2'].player === value.player && gamePieces['I1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['I2'], gamePieces['I1']) ? value.player : null
          return playerWin
        } else if (gamePieces['H2'].player === value.player && gamePieces['G1'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H2'], gamePieces['G1']) ? value.player : null
          return playerWin
        } else if (gamePieces['H3'].player === value.player && gamePieces['G3'].player === value.player) {
          playerWin = pieceCombination(value, gamePieces['H3'], gamePieces['G3']) ? value.player : null
          return playerWin
        }
      }
    })

    return playerWin
  }

  return <PlayerContext.Provider value={{ playerTurn, setPlayerTurn, determinePlayerWin, determineGameTwoPlayerWin, determineGameThreePlayerWin }}>
    {children}
  </PlayerContext.Provider>
}

// Custom hook to use the useBoard
export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
