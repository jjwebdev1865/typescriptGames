import { createContext, useEffect, useState } from "react";


export const GameContext = createContext({
  loading: false,
  playerTurn: 'p1'
});

interface GameProviderProps {
  children: React.ReactNode
}
export const GameProvider = ({ children }: GameProviderProps) => {
  const [playerTurn, setPlayerTurn] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPlayerTurn('p1')
    setLoading(false)
  }, [])

  const value = { playerTurn, loading };



  return <GameContext.Provider value={value}>
    {children}
  </GameContext.Provider>
}