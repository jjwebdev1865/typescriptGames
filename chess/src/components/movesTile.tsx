import React, { useContext } from "react"
import { PlayersContext } from "../context/players.context"
import { Player } from "../types/models"
import { GameContext } from "../context/game.context"

interface MovesTileProps {
  player: Player
}
export const MovesTile = ({ player }: MovesTileProps) => {
  const { changeTurn } = useContext(GameContext)
  const {  handlePieceMove } = useContext(PlayersContext)

  const handlePawnMove = (position: string, piece: string) => {
    console.log('position', position)
    console.log('piece', piece)
    handlePieceMove(position, piece)
    // changeTurn()
  }

  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex'}}>
        {Object.entries(player.pieces).map(([key, value]) => (
          <li key={key}>
            <button onClick={() => handlePawnMove(value, key)}>{key}</button>
          </li>
        ))}

      </ul>
    </div>
  )
}