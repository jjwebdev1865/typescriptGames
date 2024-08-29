import { createContext, useEffect, useState } from "react";
import { Player } from "../types/models";


export const PlayersContext = createContext({
  loading: false,
  playerOne: {} as Player,
  playerTwo: {} as Player
});

interface PlayersProviderProps {
  children: React.ReactNode
}
export const PlayersProvider = ({ children }: PlayersProviderProps) => {
  const [playerOne, setPlayerOne] = useState({} as Player);
  const [playerTwo, setPlayerTwo] = useState({} as Player);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPlayerOne({
      playerName : 'Player One',
      shortName: 'p1',
      pieces: {
        king: 'E1',
        queen: 'D1',
        rookOne: 'A1',
        rookTwo: 'H1'
      }
    })
    setPlayerTwo({
      playerName : 'Player Two',
      shortName: 'p2',
      pieces: {
        king: 'E8',
        queen: 'D8',
        rookOne: 'A8',
        rookTwo: 'H8'
      }
    })
    setLoading(false)
  }, [])

  const value = { playerOne, playerTwo, loading };



  return <PlayersContext.Provider value={value}>
    {children}
  </PlayersContext.Provider>
}