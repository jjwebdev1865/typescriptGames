import { Dispatch, JSX, SetStateAction, createContext, useContext, useState } from 'react';
import { PlayerOptions } from '../models';
import { BoardSpot } from '../components/BoardSpot/BoardSpot';

interface BoardContextType {
  playerTurn: PlayerOptions
  setPlayerTurn: Dispatch<SetStateAction<"P1" | "P2">>
  initBoard: () => JSX.Element
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined);

interface BoardProviderProps {
  children: React.ReactNode
}

export const BoardProvider: React.FC<BoardProviderProps> = ({children}) => {
  const [playerTurn, setPlayerTurn] = useState<PlayerOptions>('P1')

  function initBoard() {
    const rows = ['A', 'B', 'C']

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
  
  return <BoardContext.Provider value={{ playerTurn, setPlayerTurn, initBoard }}>
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
