import { createContext, useContext } from "react";
import { getPlayerOneMoves, getPlayerTwoMoves } from "../utils/moveFunctions/getMoves";
import { PieceInfoFE } from "../types";

interface MovesContextType {
  getPieceMoves: (checkerPiece: PieceInfoFE) => string[];
}

export const MovesContext = createContext<MovesContextType | undefined>(undefined);

interface MovesProviderProps {
  children: React.ReactNode
}

export const MovesProvider: React.FC<MovesProviderProps> = ({ children }) => {

  function getPieceMoves(checkerPiece: PieceInfoFE): string[] {
    if (checkerPiece.piece === 1) {
      const newMoves: string[] = getPlayerOneMoves(checkerPiece.key)
      return newMoves
    } else if (checkerPiece.piece === 2) {
      const newMoves: string[] = getPlayerTwoMoves(checkerPiece.key)
      return newMoves
    } else {
      return [] as string[]
    }
  }

  return <MovesContext.Provider value={{ getPieceMoves }}>
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