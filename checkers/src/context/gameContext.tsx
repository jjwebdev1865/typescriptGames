import { createContext, useEffect, useState } from "react";

export const GameContext = createContext({
  playerTurn: 'p1',
  changeTurn: () => {},
});

interface GameProviderProps {
  children: React.ReactNode
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [playerTurn, setPlayerTurn] = useState('');

  useEffect(() => {
    setPlayerTurn('p1')
  }, [])

  const changeTurn = () => {
    if (playerTurn === 'p1') {
      setPlayerTurn('p2')
    } else {
      setPlayerTurn('p1')
    }
  }

  const value = { playerTurn, changeTurn, };

  return <GameContext.Provider value={value}>
    {children}
  </GameContext.Provider>
}