import { Dispatch, JSX, SetStateAction, createContext, useContext, useState } from 'react';
import { BoardInfo, PlayerOptions } from '../models';
import { BoardSpot } from '../components/BoardSpot/BoardSpot';

interface BoardContextType {
  playerTurn: PlayerOptions
  setPlayerTurn: Dispatch<SetStateAction<"P1" | "P2">>
  initBoard: () => JSX.Element
  availableMoves: string[]
  gamePieces: BoardInfo
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

interface BoardProviderProps {
  children: React.ReactNode
}

export const BoardProvider: React.FC<BoardProviderProps> = ({children}) => {
  const rows = ['A', 'B', 'C']
  const [playerTurn, setPlayerTurn] = useState<PlayerOptions>('P1')
  const [availableMoves, setAvailableMoves] = useState<string[]>(initMoves())
  const [gamePieces, setGamePieces] = useState<BoardInfo>(boardInfo())

  function initMoves(): string[] {
    const moves: string[] = []
    rows.forEach(row => {
      moves.push(`${row}1`)
      moves.push(`${row}2`)
      moves.push(`${row}3`)
    })

    return moves
  }

  function boardInfo(): BoardInfo {
    const test: BoardInfo = {
      "A1": {isOpen: true},
      "A2": {isOpen: true},
      "A3": {isOpen: true},
      "B1": {isOpen: true},
      "B2": {isOpen: true},
      "B3": {isOpen: true},
      "C1": {isOpen: true},
      "C2": {isOpen: true},
      "C3": {isOpen: true}
    }
    return test
  }

  function initBoard() {
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
  
  return <BoardContext.Provider value={{ playerTurn, setPlayerTurn, initBoard, availableMoves, gamePieces }}>
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
