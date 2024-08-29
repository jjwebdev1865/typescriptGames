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
        rookTwo: 'H1',
        pawnOne: "A2",
        pawnTwo: "B2",
        pawnThree: "C2",
        pawnFour: "D2",
        pawnFive: "E2",
        pawnSix: "F2",
        pawnSeven: "G2",
        pawnEight: "H2"
      }
    })
    setPlayerTwo({
      playerName : 'Player Two',
      shortName: 'p2',
      pieces: {
        king: 'E8',
        queen: 'D8',
        rookOne: 'A8',
        rookTwo: 'H8',
        pawnOne: "A7",
        pawnTwo: "B7",
        pawnThree: "C7",
        pawnFour: "D7",
        pawnFive: "E7",
        pawnSix: "F7",
        pawnSeven: "G7",
        pawnEight: "H7"
      }
    })
    setLoading(false)
  }, [])

  const value = { playerOne, playerTwo, loading };



  return <PlayersContext.Provider value={value}>
    {children}
  </PlayersContext.Provider>
}