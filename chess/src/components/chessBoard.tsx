import React, { useContext } from "react";
import { PlayersContext } from "../context/players.context";
import { Player } from "../types/models";

export const ChessBoard = () => {
  const { playerOne, playerTwo, loading } = useContext(PlayersContext)

  if (loading) {
    return <div> Loading </div>
  }

  return (
    <div data-testid='chest-board-container' style={{ border: '3px solid black', width: '80%'}}>
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
    <div data-test={`chess-board-files-${number}`} style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: '75px'}}>
      {columnLetters.map(letter => {
        const square = `${letter}${number}`
        let hasPlayerOnePiece = false
        let hasPlayerTwoPiece = false

        for (const [key, value] of Object.entries(playerOne.pieces)) {
          if (value === square) {
            hasPlayerOnePiece = true
          }
        }

        for (const [key, value] of Object.entries(playerTwo.pieces)) {
          if (value === square) {
            hasPlayerTwoPiece = true
          }
        }

        // const hasPlayerOnePiece = square === playerOne.pieces.king ? true : false
        // const hasPlayerTwoPiece = square === playerTwo.pieces.king ? true : false

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