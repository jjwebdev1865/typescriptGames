import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface BoardContextType {
  playerTurn: 'P1' | 'P2'
  setPlayerTurn: Dispatch<SetStateAction<"P1" | "P2">>
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

interface BoardProviderProps {
  children: React.ReactNode
}

export const BoardProvider: React.FC<BoardProviderProps> = ({children}) => {
  const [playerTurn, setPlayerTurn] = useState<'P1' | 'P2'>('P1')

  return <BoardContext.Provider value={{ playerTurn, setPlayerTurn }}>
     {children}
  </BoardContext.Provider>
}

// Custom hook to use the useBoard
export const useBoard = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useCounter must be used within a MovesProvider');
  }
  return context;
};
