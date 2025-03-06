import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { GameCount } from '../models';

interface GamesContextType {
  gameCount: number
  setGameCount: Dispatch<SetStateAction<number>>
  playerGames: GameCount
  setPlayerGames: Dispatch<SetStateAction<GameCount>>
}

export const GamesContext = createContext<GamesContextType | undefined>(undefined);

interface GamesProviderProps {
  children: React.ReactNode
}

export const GamesProvider: React.FC<GamesProviderProps> = ({children}) => {
  // TODO: below count can only be 1, 2, or 3
  const [ gameCount, setGameCount ] = useState<number>(1)
  const [ playerGames, setPlayerGames ] = useState<GameCount>({
    1: null,
    2: null,
    3: null
  })


  return <GamesContext.Provider value={{ gameCount, setGameCount, playerGames, setPlayerGames }}>
     {children}
  </GamesContext.Provider>
}

// Custom hook to use the useGame
export const useGameContext = (): GamesContextType => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GamesProvider');
  }
  return context;
};
