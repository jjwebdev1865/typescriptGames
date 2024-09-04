import React, { useContext, useState } from "react"
import { PlayersContext } from "../context/players.context"
import { PieceInfo, Player } from "../types/models"
import { GameContext } from "../context/game.context"

interface MovesTileProps {
  player: Player
}
export const MovesTile = ({ player }: MovesTileProps) => {
  const { changeTurn } = useContext(GameContext)
  const { handlePieceMove, getMoveOptions, getAttackOptions, isOpponentInPosition } = useContext(PlayersContext)
  const [moveOptions, setMoveOptions] = useState([] as (string | PieceInfo | boolean)[][]) // piece, piece info, isDisabled
  const [attackOptions, setAttackOptions] = useState([] as (string | PieceInfo | boolean)[][]) // piece, piece info, isDisabled

  function handleMoveOptions(piece: string, pieceInfo: PieceInfo) {
    const movePositions = getMoveOptions(pieceInfo.position, pieceInfo.name.toLowerCase())
    const attackPositions = getAttackOptions(pieceInfo.position, pieceInfo.name.toLowerCase())

    const newMoveList: any[] = []
    movePositions.forEach(move => {
      const isPieceInPosition = isOpponentInPosition(move)
      const newMove = [
        piece,
        {
          ...pieceInfo,
          position: move
        },
        isPieceInPosition ? true : false
      ]
      newMoveList.push(newMove)
    })

    const attackOptionsList: any[] = []
    attackPositions.forEach(attack => {
      const isPieceInPosition = isOpponentInPosition(attack)
      const newAttack = [
        piece,
        {
          ...pieceInfo,
          position: attack
        },
        isPieceInPosition ? true : false
      ]

      attackOptionsList.push(newAttack)
    })

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
        {moveOptions.map(option => {
          const piece = option[0] as string
          const pieceInfo = option[1] as PieceInfo
          const isMovedNotAllowed = moveOptions[moveOptions.length - 1][2] as boolean
          return (
            <li key={`move-option-${option}`}>
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
        {attackOptions.map(attack => {
          const piece = attack[0] as string
          const pieceInfo = attack[1] as PieceInfo
          const isPieceInPosition = moveOptions[moveOptions.length - 1][2] as boolean
          return (
            <li key={`attack-option-${piece}-${pieceInfo.position}`}>
              <button 
                onClick={() => handlePawnMove(piece, pieceInfo)}
                disabled={!isPieceInPosition}
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