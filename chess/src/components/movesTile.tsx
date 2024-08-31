import React, { useContext } from "react"
import { PlayersContext } from "../context/players.context"
import { PieceInfo, Player } from "../types/models"
import { GameContext } from "../context/game.context"

interface MovesTileProps {
  player: Player
}
export const MovesTile = ({ player }: MovesTileProps) => {
  const { changeTurn } = useContext(GameContext)
  const {  handlePieceMove } = useContext(PlayersContext)

  const handlePawnMove = (piece: string, pieceInfo: PieceInfo) => {
    console.log('piece', piece)
    console.log('pieceInfo', pieceInfo)
    // TODO: get move options
    handlePieceMove(piece, {
      name: pieceInfo.name,
      position: 'A3'
    })
    // changeTurn()
  }

  return (
    <div>
      {/* <ul style={{ listStyle: 'none', display: 'flex'}}> */}
      <ul style={{ listStyle: 'none'}}>
        {Object.entries(player.pieces).map(([key, value]) => (
          <li key={key}>
            <button onClick={() => handlePawnMove(key, value)}>{key}</button>
          </li>
        ))}

      </ul>
    </div>
  )
}