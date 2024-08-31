import { createContext, useEffect, useState } from "react";
import { PieceInfo, Pieces, Player } from "../types/models";
import { getPieceMoves } from "../utils/getPieceMoves";


export const PlayersContext = createContext({
  loading: false,
  playerOne: {} as Player,
  playerTwo: {} as Player,
  handlePieceMove: (position: string, piece: PieceInfo) => {},
  getMoveOptions: (currentPosition: string) => '' as string
});

interface PlayersProviderProps {
  children: React.ReactNode
}
export const PlayersProvider = ({ children }: PlayersProviderProps) => {
  const [playerOne, setPlayerOne] = useState({} as Player);
  const [playerTwo, setPlayerTwo] = useState({} as Player);
  const [loading, setLoading] = useState(true)

  const handlePieceMove = (piece: string, pieceInfo: PieceInfo) => {
    setLoading(true)

  const pieces: any = playerOne.pieces
  const newPieces: any ={}
  for (const property in playerOne.pieces) {
    if (property === piece) {
      newPieces[property] = pieceInfo as PieceInfo
    } else {
      newPieces[property] = pieces[property] as PieceInfo
    }
  }

    setPlayerOne({
      ...playerOne,
      pieces: newPieces
    })

    setLoading(false)
  }

  const getMoveOptions = (currentPosition: string): string => {
    const newPosition = getPieceMoves(currentPosition) as string
    return newPosition
  }

  useEffect(() => {
    setPlayerOne({
      playerName : 'Player One',
      shortName: 'p1',
      pieces: {
        pawnOne: {
          name: 'Pawn',
          position: 'A2'
        },
        pawnTwo: {
          name: 'Pawn',
          position: 'B2'
        },
        pawnThree: {
          name: 'Pawn',
          position: 'C2'
        },
        pawnFour: {
          name: 'Pawn',
          position: 'D2'
        },
        pawnFive: {
          name: 'Pawn',
          position: 'E2'
        },
        pawnSix: {
          name: 'Pawn',
          position: 'F2'
        },
        pawnSeven: {
          name: 'Pawn',
          position: 'G2'
        },
        pawnEight: {
          name: 'Pawn',
          position: 'H2'
        },
      }
    })

    setPlayerTwo({
      playerName : 'Player Two',
      shortName: 'p2',
      pieces: {
        pawnOne: {
          name: 'Pawn',
          position: 'A7'
        },
        pawnTwo: {
          name: 'Pawn',
          position: 'B7'
        },
        pawnThree: {
          name: 'Pawn',
          position: 'C7'
        },
        pawnFour: {
          name: 'Pawn',
          position: 'D7'
        },
        pawnFive: {
          name: 'Pawn',
          position: 'E7'
        },
        pawnSix: {
          name: 'Pawn',
          position: 'F7'
        },
        pawnSeven: {
          name: 'Pawn',
          position: 'G7'
        },
        pawnEight: {
          name: 'Pawn',
          position: 'H7'
        },
      }
    })

    setLoading(false)
  }, [])

  const value = { playerOne, playerTwo, loading, handlePieceMove, getMoveOptions };



  return <PlayersContext.Provider value={value}>
    {children}
  </PlayersContext.Provider>
}