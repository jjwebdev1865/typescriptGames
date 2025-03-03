import { Dispatch, SetStateAction } from "react"
import { GameType, PlayerTurn } from "../../types"
import { NavbarContainer } from "./navbar.styles"


interface NavbarProps {
  playerTurn: PlayerTurn
  gameType: GameType
  setGameType: Dispatch<SetStateAction<GameType>>
}

export const Navbar = ({ playerTurn, gameType, setGameType }: NavbarProps) => {
  const gameTypeDisplay = gameType === 2 ? '2 Manual Players' : '1 Player against AI'

  return (
    <NavbarContainer>
      <div>
        <h1>Checkers</h1>
        <p>By Jim Jiracek</p>
        <h2>Player turn: {playerTurn.toUpperCase()}</h2>
      </div>

      <div>
        <button onClick={() => setGameType(1)}>1 Player</button>
        <button onClick={() => setGameType(2)}>2 Player</button>
        <div>Game Type: {gameTypeDisplay.toUpperCase()}</div>
      </div>

      <div>
        account placeholder
      </div>
    </NavbarContainer>
  )
}