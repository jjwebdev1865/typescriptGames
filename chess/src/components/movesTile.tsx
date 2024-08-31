import React, { useContext, useState } from "react"
import { PlayersContext } from "../context/players.context"
import { PieceInfo, Player } from "../types/models"
import { GameContext } from "../context/game.context"

interface MovesTileProps {
  player: Player
}
export const MovesTile = ({ player }: MovesTileProps) => {
  const { changeTurn } = useContext(GameContext)
  const { handlePieceMove, getMoveOptions } = useContext(PlayersContext)
  const [moveOptions, setMoveOptions] = useState([] as (string | PieceInfo)[][])

  const handleMoveOptions = (piece: string, pieceInfo: PieceInfo) => {
    const newPosition = getMoveOptions(pieceInfo.position)

    const newMoveOption = [piece, {
      ...pieceInfo,
      position: newPosition
    }]
    
    setMoveOptions([newMoveOption])
  }

  const handlePawnMove = (piece: string, pieceInfo: PieceInfo) => {
    handlePieceMove(piece, pieceInfo)
    setMoveOptions([])
    // changeTurn()
  }

  const displayMoves = () => {
    return (
      <ul style={{ listStyle: 'none', display: 'flex'}}>
        {moveOptions.map(option => {
          const piece = option[0] as string
          const pieceInfo = option[1] as PieceInfo
          return (
            <li key={`move-option-${option}`}>
              <button onClick={() => handlePawnMove(piece, pieceInfo)}>{pieceInfo.position}</button> 
            </li>
          )}
        )}
      </ul>
    )
  }


  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex'}}>
        {Object.entries(player.pieces).map(([key, value]) => (
          <li key={key}>
            <button onClick={() => handleMoveOptions(key, value)}>{key}</button>
          </li>
        ))}
      </ul>
      {moveOptions.length > 0 && displayMoves()}
    </div>
  )
}