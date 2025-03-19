import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface GamesContextType {
  gameCount: number
  setGameCount: Dispatch<SetStateAction<number>>
  isGameOver: boolean
  setIsGameOver: Dispatch<SetStateAction<boolean>>
  isGameTwoOver: boolean
  setIsGameTwoOver: Dispatch<SetStateAction<boolean>>
  isGameThreeOver: boolean
  setIsGameThreeOver: Dispatch<SetStateAction<boolean>>
}

export const GamesContext = createContext<GamesContextType | undefined>(undefined);

interface GamesProviderProps {
  children: React.ReactNode
}

export const GamesProvider: React.FC<GamesProviderProps> = ({children}) => {
  // TODO: below count can only be 1, 2, or 3
  const [ gameCount, setGameCount ] = useState<number>(1)
  const [ isGameOver, setIsGameOver ] = useState(false)
  const [ isGameTwoOver, setIsGameTwoOver ] = useState(false)
  const [ isGameThreeOver, setIsGameThreeOver ] = useState(false)

  return <GamesContext.Provider value={{ gameCount, setGameCount, isGameTwoOver, setIsGameTwoOver, isGameThreeOver, setIsGameThreeOver, isGameOver, setIsGameOver }}>
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
