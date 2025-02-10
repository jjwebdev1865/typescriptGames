import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Board, MoveType, PieceInfoFE, PieceMove } from "../types";


interface GameContextType {
  playerTurn: string;
  setPlayerTurn: Dispatch<SetStateAction<string>>
  handleInitialBoardSetup: (board: Board) => Board;
  updateBoard: (selectedPiece: PieceInfoFE, board: Board, updatedPiece: PieceMove) => Board;
  playerOnePieceCount: number
  playerTwoPieceCount: number
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
  children: React.ReactNode
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [playerTurn, setPlayerTurn] = useState('p1');
  const [playerOnePieceCount, setPlayerOnePieceCount] = useState(12)
  const [playerTwoPieceCount, setPlayerTwoPieceCount] = useState(12)

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
          if (!isDivisible && (key === 'A' || key === 'C')) {
            newRow.push({
              position: piece.position,
              piece: 2
            })
          } else if (isDivisible && key === 'B') {
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

  function updateBoard(selectedPiece: PieceInfoFE, board: Board, updatedPiece: PieceMove): Board {
    const { piece, type, attackPieceToRemove } = updatedPiece
    const [moveKey, movePosition] = piece.split("")
    const [selectedKey, selectedPosition] = selectedPiece.key.split("")
    const newBoard: Board = {}
    Object.entries(board).forEach(([ key, value]) => {
      if (key === moveKey) {
        const newRow = [] as any[]
        value.forEach(piece => {
          if (piece.position === Number(movePosition)) {
            newRow.push({
              position: piece.position,
              piece: selectedPiece.piece
            })
          } else {
            newRow.push(piece)
          }
        })
        newBoard[key] = newRow
      } else if (key === selectedKey) {
        const newRow = [] as any[]
        value.forEach(piece => {
          if (piece.position === Number(selectedPosition)) {
            newRow.push({
              position: piece.position,
              piece: null
            })
          } else {
            newRow.push(piece)
          }
        })
        newBoard[key] = newRow
      }
      else {
        newBoard[key] = value
      }
    })

    // TODO: cleanup
    if (type === 'attack' && attackPieceToRemove !== undefined) {
      const [deletionKey, deletionPosition] = attackPieceToRemove.split("")
      Object.entries(board).forEach(([ key, value]) => {
        const newRow = [] as any[]
        if (key === deletionKey) {
          value.forEach(piece => {
            if (Number(deletionPosition) === piece.position) {
              newRow.push({
                position: piece.position,
                piece: null
              })
            } else {
              newRow.push(piece)
            }
          })
          newBoard[key] = newRow
        }
      })
      if (selectedPiece.piece === 1) {
        setPlayerTwoPieceCount(playerTwoPieceCount - 1)
      } else {
        setPlayerOnePieceCount(playerOnePieceCount - 1)
      }
    }

    return newBoard
  }

  return <GameContext.Provider value={{ playerTurn, setPlayerTurn, handleInitialBoardSetup, updateBoard, playerOnePieceCount, playerTwoPieceCount }}>
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