import { createContext, useContext, useEffect, useState } from "react";
import { Board } from "../App";

interface GameContextType {
  playerTurn: string;
  handleInitialBoardSetup: (board: Board) => Board;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
  children: React.ReactNode
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [playerTurn, setPlayerTurn] = useState('p1');

  useEffect(() => {
    setPlayerTurn('p1')
  }, [])

  function handleInitialBoardSetup(board: Board): Board {
    const startingBoard: Board = {} as Board
    Object.entries(board).forEach(([ key, value]) => {
      const newRow = [] as any[]
      if (['F', 'G', 'H'].includes(key)) {
        value.forEach((piece: any, index: number) => {
          const isDivisible = index % 2 === 0
          if (isDivisible && (key === 'H' || key === 'F')) {
            newRow.push({
              position: piece.position,
              piece: 1
            })
          } else if (!isDivisible && key === 'G') {
            newRow.push({
              position: piece.position,
              piece: 1
            })
          } else {
            newRow.push({
              position: piece.position,
              piece: null
            })
          }
        })
        startingBoard[key] = newRow
      } else if (['A', 'B', 'C'].includes(key)) {
        value.forEach((piece: any, index: number) => {
          const isDivisible = index % 2 === 0
          if (isDivisible && (key === 'A' || key === 'C')) {
            newRow.push({
              position: piece.position,
              piece: 2
            })
          } else if (!isDivisible && key === 'B') {
            newRow.push({
              position: piece.position,
              piece: 2
            })
          } else {
            newRow.push({
              position: piece.position,
              piece: null
            })
          }
        })
        startingBoard[key] = newRow
      } else {
        startingBoard[key] = value
      }        
    })

    return startingBoard
  }

  return <GameContext.Provider value={{ playerTurn, handleInitialBoardSetup }}>
    {children}
  </GameContext.Provider>
}

// Custom hook to use the useGame
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};