import React, { useContext } from "react";
import { PlayersContext } from "../context/players.context";
import { Player } from "../types/models";

export const ChessBoard = () => {
  const { playerOne, playerTwo, loading } = useContext(PlayersContext)

  if (loading) {
    return <div> Loading </div>
  }

  return (
    <div data-testid='chest-board-container' style={{ border: '3px solid black', width: '75%'}}>
      <ChessBoardFiles number={8} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={7} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={6} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={5} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={4} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={3} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={2} playerTwo={playerTwo} playerOne={playerOne} />
      <ChessBoardFiles number={1} playerTwo={playerTwo} playerOne={playerOne} />
    </div>
  )
}

interface ChessBoardFilesProps {
  number: number
  playerOne: Player
  playerTwo: Player
}
const ChessBoardFiles = ({number, playerOne, playerTwo}: ChessBoardFilesProps) => {
  const columnLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  return (
    <div data-test={`chess-board-files-${number}`} style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: '65px'}}>
      {columnLetters.map(letter => {
        const square = `${letter}${number}`
        let hasPlayerOnePiece = false
        let hasPlayerTwoPiece = false

        for (const [key, value] of Object.entries(playerOne.pieces)) {
          if (value.position === square) {
            hasPlayerOnePiece = true
          }
        }

        for (const [key, value] of Object.entries(playerTwo.pieces)) {
          if (value.position === square) {
            hasPlayerTwoPiece = true
          }
        }

        return <ChestBoardColumn key={square} square={square} hasPlayerOnePiece={hasPlayerOnePiece} hasPlayerTwoPiece={hasPlayerTwoPiece} />
      })}

    </div>
  )
}

interface ChestBoardColumnProps {
  square: string
  hasPlayerOnePiece: boolean
  hasPlayerTwoPiece: boolean
}
const ChestBoardColumn = ({ square, hasPlayerOnePiece, hasPlayerTwoPiece }: ChestBoardColumnProps) => {
  let color = 'inherit'
  if (hasPlayerOnePiece) {
    color = 'red'
  } else if (hasPlayerTwoPiece) {
    color = 'blue'
  }
  return (
    <div 
      data-testid={`chess-board-square`} 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color
      }}
    >
      {square}
    </div>
  )
}