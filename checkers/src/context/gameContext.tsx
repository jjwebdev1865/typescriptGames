import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { Board, PieceInfo, PieceInfoFE, PieceMove, PlayerTurn } from "../types";


interface GameContextType {
  playerTurn: PlayerTurn;
  setPlayerTurn: Dispatch<SetStateAction<PlayerTurn>>
  handleInitialBoardSetup: (board: Board) => Board;
  updateBoard: (selectedPiece: PieceInfoFE, board: Board, updatedPiece: PieceMove, playerTurn: string) => Board;
  playerOnePieceCount: number
  playerTwoPieceCount: number
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
  children: React.ReactNode
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>('p1');
  const [playerOnePieceCount, setPlayerOnePieceCount] = useState(12)
  const [playerTwoPieceCount, setPlayerTwoPieceCount] = useState(12)

  function handleInitialBoardSetup(board: Board): Board {
    const startingBoard: Board = {} as Board
    Object.entries(board).forEach(([ key, value]) => {
      const newRow = [] as PieceInfo[]
      if (['F', 'G', 'H'].includes(key)) {
        value.forEach((piece: PieceInfo, index: number) => {
          const isDivisible = index % 2 === 0
          if (isDivisible && (key === 'H' || key === 'F')) {
            newRow.push({
              position: piece.position,
              piece: 1,
              isKing: false
            })
          } else if (!isDivisible && key === 'G') {
            newRow.push({
              position: piece.position,
              piece: 1,
              isKing: false
            })
          } else {
            newRow.push({
              position: piece.position,
              piece: null,
              isKing: false
            })
          }
        })
        startingBoard[key] = newRow
      } else if (['A', 'B', 'C'].includes(key)) {
        value.forEach((piece: PieceInfo, index: number) => {
          const isDivisible = index % 2 === 0
          if (!isDivisible && (key === 'A' || key === 'C')) {
            newRow.push({
              position: piece.position,
              piece: 2,
              isKing: false
            })
          } else if (isDivisible && key === 'B') {
            newRow.push({
              position: piece.position,
              piece: 2,
              isKing: false
            })
          } else {
            newRow.push({
              position: piece.position,
              piece: null,
              isKing: false
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

  function getNewRow(rowPieces: PieceInfo[], movePosition: number, selectedPiece: number | null, isKing: boolean): PieceInfo[] {
    const newRow = [] as PieceInfo[]
    rowPieces.forEach(rowPiece => {
      if (rowPiece.position === Number(movePosition)) {
        newRow.push({
          position: rowPiece.position,
          piece: selectedPiece,
          isKing
        })
      } else {
        newRow.push(rowPiece)
      }
    })

    return newRow
  }

  function updateBoard(selectedPiece: PieceInfoFE, board: Board, updatedPiece: PieceMove, playerTurn: string): Board {
    const { piece: updatedPieceInfo, type, attackPieceToRemove } = updatedPiece
    const [moveKey, movePosition] = updatedPieceInfo.split("")
    const [selectedKey, selectedPosition] = selectedPiece.key.split("")
    const newBoard: Board = {}
    Object.entries(board).forEach(([ key, value]) => {
      if (key === moveKey) {
        const newRow = getNewRow(value, Number(movePosition), selectedPiece.piece, selectedPiece.isKing)
        const isPlayerOneKinged = playerTurn === 'p1' && moveKey === 'A'
        const isPlayerTwoKinged = playerTurn === 'p2' && moveKey === 'H'
        if (isPlayerOneKinged || isPlayerTwoKinged) {
          const kingedRow: PieceInfo[] = []
          newRow.forEach(rowPiece => {
            if (rowPiece.position === Number(movePosition)) {
              kingedRow.push({
                position: rowPiece.position,
                piece: rowPiece.piece,
                isKing: true
              })
            } else {
              kingedRow.push(rowPiece)
            }
          })
          newBoard[key] = kingedRow
        } else {
          newBoard[key] = newRow
        }
      } else if (key === selectedKey) {
        const newRow = getNewRow(value, Number(selectedPosition), null, selectedPiece.isKing)
        newBoard[key] = newRow
      }
      else {
        newBoard[key] = value
      }
    })

    // todo: clean up
    if (type === 'attack' && attackPieceToRemove !== undefined) {
      const [deletionKey, deletionPosition] = attackPieceToRemove.split("")
      Object.entries(board).forEach(([ key, value]) => {
        let newRow = [] as PieceInfo[]
        if (key === deletionKey) {
          newRow = getNewRow(value, Number(deletionPosition), null, selectedPiece.isKing)
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