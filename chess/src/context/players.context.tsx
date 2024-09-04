import { createContext, useEffect, useState } from "react";
import { PieceInfo, Pieces, Player } from "../types/models";
import { getKnightMoves, getPawnMoves } from "../utils/getPieceMoves";
import { getKnightAttacks, getPawnAttacks } from "../utils/getPieceAttacks";


export const PlayersContext = createContext({
  loading: false,
  playerOne: {} as Player,
  playerTwo: {} as Player,
  handlePieceMove: (position: string, piece: PieceInfo) => {},
  getMoveOptions: (currentPosition: string, pieceType: any) => [''] as string[],
  getAttackOptions: (currentPosition: string, pieceType: any) => [''] as string[],
  isOpponentInPosition: (newPosition: string) => false as boolean
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

    const playerTwoPieces: any = playerTwo.pieces
    const newPlayerTwoPieces: any = {}
    const graveYard: string[] = playerTwo.graveyard
    for (const property in playerTwo.pieces) {
      const currentPiece = playerTwoPieces[property] as PieceInfo 
      if (currentPiece.position === pieceInfo.position) {
        graveYard.push(playerTwoPieces[property].name)
      } else {
        newPlayerTwoPieces[property] = playerTwoPieces[property] as PieceInfo
      }
    }

    setPlayerOne({
      ...playerOne,
      pieces: newPieces
    })

    setPlayerTwo({
      ...playerTwo,
      pieces: newPlayerTwoPieces,
      graveyard: graveYard
    })

    setLoading(false)
  }

  const getMoveOptions = (currentPosition: string, pieceType: 'pawn' | 'knight'): string[] => {
    if (pieceType === 'pawn') {
      return getPawnMoves(currentPosition) as string[]
    } else {
      return getKnightMoves(currentPosition) as string[]
    }
  }

  const getAttackOptions = (currentPosition: string, pieceType: 'pawn' | 'knight'): string[] => {
    if (pieceType === 'pawn') {
      return getPawnAttacks(currentPosition) as string[]
    } else {
      return getKnightAttacks(currentPosition) as string[]
    }
    // const newPosition = getPawnAttacks(currentPosition) as string[]
    // return newPosition
  }

  function isOpponentInPosition(newPosition: string) {
    for (const [key, value] of Object.entries(playerTwo.pieces)) {
      if (newPosition === value.position) {
        return true
      }
    }
    return false
  }

  useEffect(() => {
    setPlayerOne({
      playerName : 'Player One',
      shortName: 'p1',
      graveyard: [],
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
        knightOne: {
          name: 'Knight',
          position: 'B1'
        },
        knightTwo: {
          name: 'Knight',
          position: 'G1'
        }
      }
    })

    setPlayerTwo({
      playerName : 'Player Two',
      shortName: 'p2',
      graveyard: [],
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
        knightOne: {
          name: 'Knight',
          position: 'B8'
        },
        knightTwo: {
          name: 'Knight',
          position: 'G8'
        }
      }
    })

    setLoading(false)
  }, [])

  const value = { playerOne, playerTwo, loading, handlePieceMove, getMoveOptions, getAttackOptions, isOpponentInPosition };



  return <PlayersContext.Provider value={value}>
    {children}
  </PlayersContext.Provider>
}