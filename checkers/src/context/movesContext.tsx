import { createContext, useContext, useEffect, useState } from "react";
import { Board, PieceInfoFE } from "../App";
import { getPlayerOneMoves } from "../utils/moveFunctions/getPlayerOneMoves";

interface MovesContextType {
  handlePieceMove: () => void;
  getPieceMoves: (checkerPiece: PieceInfoFE) => string[];
}

export const MovesContext = createContext<MovesContextType | undefined>(undefined);

interface MovesProviderProps {
  children: React.ReactNode
}

export const MovesProvider: React.FC<MovesProviderProps> = ({ children }) => {

  function handlePieceMove(): void {
    console.log('here handlePieceMove')
  }

  function getPieceMoves(checkerPiece: PieceInfoFE): string[] {
    console.log('here getPieceMoves')
    if (checkerPiece.piece === 1) {
      const newMoves: string[] = getPlayerOneMoves()
      console.log('newMoves', newMoves)
      return newMoves
    } else {
      return [] as string[]
    }
  }

  return <MovesContext.Provider value={{ handlePieceMove, getPieceMoves }}>
    {children}
  </MovesContext.Provider>
}

// Custom hook to use the useGame
export const useMoves = (): MovesContextType => {
  const context = useContext(MovesContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};