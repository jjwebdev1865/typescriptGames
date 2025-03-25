import { JSX } from 'react'

interface GameBoardProps {
  gameWinner: string | null
  boardGame: JSX.Element | null
  gameString: string
}

export const GameBoard = ({gameWinner, boardGame, gameString}: GameBoardProps): JSX.Element => {
  let winner = ''
  if (gameWinner === null) {
    winner = 'null'
  } else if (gameWinner === '') {
    winner = 'Scratch'
  } else if (gameWinner !== null && gameWinner !== '') {
    winner = gameWinner
  }

  return (
    <div data-testid={`${gameString}-board-game-container`}>
      <h4>{gameString} Game: Won by {winner}</h4>
      {boardGame}
    </div>
  )
}
