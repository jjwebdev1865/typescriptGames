import React, { useContext } from "react"
import { PlayersContext } from "../context/players.context"
import { PieceInfo, Player } from "../types/models"
import { GameContext } from "../context/game.context"

interface MovesTileProps {
  player: Player
}
export const MovesTile = ({ player }: MovesTileProps) => {
  const { changeTurn } = useContext(GameContext)
  const {  handlePieceMove, getMoveOptions } = useContext(PlayersContext)

  const handlePawnMove = (piece: string, pieceInfo: PieceInfo) => {
    // TODO: get move options
    const newPosition = getMoveOptions(pieceInfo.position)
    handlePieceMove(piece, {
      name: pieceInfo.name,
      position: newPosition
    })
    // changeTurn()
  }

  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex'}}>
        {Object.entries(player.pieces).map(([key, value]) => (
          <li key={key}>
            <button onClick={() => handlePawnMove(key, value)}>{key}</button>
          </li>
        ))}

      </ul>
    </div>
  )
}