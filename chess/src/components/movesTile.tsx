import React, { useContext, useState } from "react"
import { PlayersContext } from "../context/players.context"
import { PieceInfo, Player } from "../types/models"
import { GameContext } from "../context/game.context"
import { GetAttackList } from '../utils/getAttackOptions'
import { GetMoveList } from "../utils/getMoveList"

interface MovesTileProps {
  player: Player
}
export const MovesTile = ({ player }: MovesTileProps) => {
  const { changeTurn } = useContext(GameContext)
  const { handlePieceMove, getMoveOptions, getAttackOptions, isOpponentInPosition, isPlayerPieceInPosition } = useContext(PlayersContext)
  const [moveOptions, setMoveOptions] = useState([] as (string | PieceInfo | boolean)[][]) // piece, piece info, isDisabled
  const [attackOptions, setAttackOptions] = useState([] as (string | PieceInfo | boolean)[][]) // piece, piece info, isDisabled

  function handleMoveOptions(piece: string, pieceInfo: PieceInfo) {
    const movePositions = getMoveOptions(pieceInfo.position, pieceInfo.name.toLowerCase())
    const attackPositions = getAttackOptions(pieceInfo.position, pieceInfo.name.toLowerCase())

    const newMoveList = GetMoveList(piece, pieceInfo, movePositions, isOpponentInPosition, isPlayerPieceInPosition)
    const attackOptionsList = GetAttackList(piece, pieceInfo, attackPositions, newMoveList, isOpponentInPosition)
    console.log('attackOptionsList', attackOptionsList)

    setMoveOptions(newMoveList)
    setAttackOptions(attackOptionsList)
  }

  function handlePawnMove(piece: string, pieceInfo: PieceInfo) {
    handlePieceMove(piece, pieceInfo)
    setMoveOptions([])
    setAttackOptions([])
    // changeTurn()
  }

  const displayMoves = () => {
    return (
      <ul style={{ listStyle: 'none', display: 'flex'}}>
        <p style={{ margin: '0', paddingRight: '10px'}}>Moves:</p>
        {moveOptions.map((option, index) => {
          const piece = option[0] as string
          const pieceInfo = option[1] as PieceInfo
          const isMovedNotAllowed = moveOptions[index][2] as boolean
          return (
            <li key={`move-option-${option}-${pieceInfo.position}`}>
              <button 
                onClick={() => handlePawnMove(piece, pieceInfo)}
                disabled={isMovedNotAllowed}
              >
                {pieceInfo.position}
              </button> 
            </li>
          )}
        )}
      </ul>
    )
  }

  const displayAttacks = () => {
    return (
      <ul style={{ listStyle: 'none', display: 'flex'}}>
        <p style={{ margin: '0', paddingRight: '10px'}}>Attacks:</p>
        {attackOptions.map((attack, index) => {
          const piece = attack[0] as string
          const pieceInfo = attack[1] as PieceInfo
          return (
            <li key={`attack-option-${piece}-${pieceInfo.position}`}>
              <button 
                onClick={() => handlePawnMove(piece, pieceInfo)}
              >
                {pieceInfo.position}
              </button> 
            </li>
          )
        })}
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
      {attackOptions.length > 0 && displayAttacks()}
    </div>
  )
}