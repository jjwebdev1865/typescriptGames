import { Dispatch, JSX, SetStateAction, createContext, useContext, useState } from 'react';
import { BoardInfo } from '../models';
import { BoardSpot } from '../components/BoardSpot/BoardSpot';
import { usePlayer } from './playerContext';

interface BoardContextType {
  initBoard: (row: string[]) => JSX.Element
  availableMoves: string[]
  gamePieces: BoardInfo
  boardInfo: (move?: string, existingBoard?: BoardInfo, gameCount?: number) => BoardInfo
  setGamePieces: Dispatch<SetStateAction<BoardInfo>>
  setAvailableMoves: Dispatch<SetStateAction<string[]>>
  initMoves: (updatedRows?: string[]) => string[]
  // TODO: this is temp 
  secondGameAvMoves: string[] | null
  setSecondGameAvMoves: Dispatch<SetStateAction<string[] | null>>
  secondGamePieces: BoardInfo | null
  setSecondGamePieces: Dispatch<SetStateAction<BoardInfo | null>>
  thirdGameAvMoves: string[] | null
  setThirdGameAvMoves: Dispatch<SetStateAction<string[] | null>>
  thirdGamePieces: BoardInfo | null
  setThirdGamePieces: Dispatch<SetStateAction<BoardInfo | null>>
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

interface BoardProviderProps {
  children: React.ReactNode
}

export const BoardProvider: React.FC<BoardProviderProps> = ({children}) => {
  const { playerTurn } = usePlayer()  
  const [availableMoves, setAvailableMoves] = useState<string[]>(initMoves())
  const [gamePieces, setGamePieces] = useState<BoardInfo>(boardInfo())
  // TODO: make more dynamic
  const [secondGameAvMoves, setSecondGameAvMoves] = useState<string[] | null>(null)
  const [secondGamePieces, setSecondGamePieces] = useState<BoardInfo | null>(null)
    // TODO: make more dynamic
  const [thirdGameAvMoves, setThirdGameAvMoves] = useState<string[] | null>(null)
  const [thirdGamePieces, setThirdGamePieces] = useState<BoardInfo | null>(null)

  function initMoves(updatedRows?: string[]): string[] {
    let rows = updatedRows !== undefined ? updatedRows : ['A', 'B', 'C']
    const moves: string[] = []
    rows.forEach(row => {
      moves.push(`${row}1`)
      moves.push(`${row}2`)
      moves.push(`${row}3`)
    })

    return moves
  }

  function boardInfo(move?: string, existingBoard?: BoardInfo, gameCount = 1): BoardInfo {
    if (move === undefined && gameCount === 1) {
      return {
        "A1": {isOpen: true, player: null},
        "A2": {isOpen: true, player: null},
        "A3": {isOpen: true, player: null},
        "B1": {isOpen: true, player: null},
        "B2": {isOpen: true, player: null},
        "B3": {isOpen: true, player: null},
        "C1": {isOpen: true, player: null},
        "C2": {isOpen: true, player: null},
        "C3": {isOpen: true, player: null}
      } as BoardInfo
    }

    if (move === undefined && gameCount === 2) {
      return {
        "D1": {isOpen: true, player: null},
        "D2": {isOpen: true, player: null},
        "D3": {isOpen: true, player: null},
        "E1": {isOpen: true, player: null},
        "E2": {isOpen: true, player: null},
        "E3": {isOpen: true, player: null},
        "F1": {isOpen: true, player: null},
        "F2": {isOpen: true, player: null},
        "F3": {isOpen: true, player: null}
      } as BoardInfo
    }

    if (move === undefined && gameCount === 3) {
      return {
        "G1": {isOpen: true, player: null},
        "G2": {isOpen: true, player: null},
        "G3": {isOpen: true, player: null},
        "H1": {isOpen: true, player: null},
        "H2": {isOpen: true, player: null},
        "H3": {isOpen: true, player: null},
        "I1": {isOpen: true, player: null},
        "I2": {isOpen: true, player: null},
        "I3": {isOpen: true, player: null}
      } as BoardInfo
    }

    let updatedBoard: BoardInfo = {}
    Object.entries(existingBoard as BoardInfo).forEach(([ key, value]) => {
      if (key !== move) {
        updatedBoard[key] = value
      } else {
        updatedBoard[key] = { isOpen: false, player: playerTurn}
      }
    })
    return updatedBoard
  }

  function initBoard(rows: string[]) {
    return (
      <div>
        {rows.map((row) => {
          const index = 1
          return (
            <ul key={`board-row-${row}`} style={{ listStyle: 'none', display: 'flex', margin: 0 }}>
              <BoardSpot row={row} index={index} />
              <BoardSpot row={row} index={index + 1} />
              <BoardSpot row={row} index={index + 2} />
            </ul>
          )
        })}
      </div>
    )
  }
  
  return <BoardContext.Provider value={{ 
    initBoard, 
    availableMoves, 
    gamePieces, 
    boardInfo, 
    setGamePieces, 
    setAvailableMoves,
    initMoves,
    secondGameAvMoves,
    setSecondGameAvMoves,
    secondGamePieces,
    setSecondGamePieces,
    thirdGameAvMoves, 
    setThirdGameAvMoves,
    thirdGamePieces, 
    setThirdGamePieces
  }}>
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
