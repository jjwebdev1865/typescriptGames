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

  const handlePawnMove = (position: any) => {
    console.log('position', position)
    handlePieceMove()
    changeTurn()
  }

  return (
    <div>
      <button onClick={() => handlePawnMove(player.pieces.pawnOne)}>Pawn One</button>
    </div>
  )
}