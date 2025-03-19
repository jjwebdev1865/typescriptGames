import { JSX } from 'react'

interface GameBoardProps {
  gameWinner: string | null
  boardGame: JSX.Element | null
  gameString: string
}

export const GameBoard = ({gameWinner, boardGame, gameString}: GameBoardProps): JSX.Element => (
  <div data-testid={`${gameString}-board-game-container`}>
    <h4>{gameString} Game: Won by {gameWinner}</h4>
    {boardGame}
  </div>
)
