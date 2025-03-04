import { createContext, useContext } from 'react';
import { getPlayerOneMoves, getPlayerTwoMoves } from '../utils/moveFunctions/getMoves';
import { PieceInfoFE } from '../types';

interface MovesContextType {
  getPieceMoves: (checkerPiece: PieceInfoFE) => string[];
  getKingMoves: (checkerPiece: PieceInfoFE) => string[];
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

  function getKingMoves(checkerPiece: PieceInfoFE) {
    const newMoves = getPieceMoves(checkerPiece)
    const fullScaleMoves = getPieceMoves({...checkerPiece, piece: checkerPiece.piece === 1 ? 2 : 1})
    const combinedList = newMoves.concat(fullScaleMoves)
    return combinedList
  }

  return <MovesContext.Provider value={{ getPieceMoves, getKingMoves }}>
    {children}
  </MovesContext.Provider>
}

// Custom hook to use the useGame
export const useMoves = (): MovesContextType => {
  const context = useContext(MovesContext);
  if (!context) {
    throw new Error('useCounter must be used within a MovesProvider');
  }
  return context;
};