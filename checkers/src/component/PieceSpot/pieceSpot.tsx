import React, { Dispatch, SetStateAction } from "react";
import { useMoves } from "../../context/movesContext";
import { PieceInfoFE } from "../../App";
import { useGame } from "../../context/gameContext";

interface PieceSpotProps {
  checkerPiece: PieceInfoFE,
  rowIndex: number,
  setAvailableMoves: Dispatch<SetStateAction<string[]>>,
  setSelectedPiece: React.Dispatch<React.SetStateAction<PieceInfoFE | undefined>>
}

export const PieceSpot = ({ checkerPiece, rowIndex, setAvailableMoves, setSelectedPiece }: PieceSpotProps) => {
  const { getPieceMoves} = useMoves()
  const { playerTurn } = useGame()
  const pieceNumber = checkerPiece.key.split("")[1]
  let backgroundColor = '#F5E6D3'
  let textColor = 'black'

  if (rowIndex % 2 === 0 && Number(pieceNumber)  % 2 === 0) {
    backgroundColor = '#3D2B1F'
    textColor = '#FFFFFF'
  } else if (rowIndex % 2 !== 0 && Number(pieceNumber)  % 2 !== 0) {
    backgroundColor = '#3D2B1F'
    textColor = '#FFFFFF'
  }
  
  const buttonTextColor = '#FFFFFF'
  let buttonColor = 'black'
  if (checkerPiece.piece !== null && checkerPiece.piece === 1) {
    buttonColor = 'red'
  }
  if (getDisabledStatus()) {
    buttonColor = 'gray'
  }

  const onClickGetPieceMoves = () => {
    const moveOptions = getPieceMoves(checkerPiece)
    setAvailableMoves(moveOptions)
    setSelectedPiece(checkerPiece)
  }

  function getDisabledStatus(): boolean {
    const playerTurnKey = playerTurn.split("")[1]
    if (checkerPiece.piece !== Number(playerTurnKey)) {
      return true
    } else {
      return false
    }
  }

  return (
    <li 
      key={`board-spot-${checkerPiece.key}`} 
      style={{
        listStyle: 'none', 
        backgroundColor: backgroundColor,
        color: textColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        {checkerPiece.piece !== null ? (
          <button 
            style={{ 
              backgroundColor: buttonColor , 
              padding: '5px 10px', 
              color: buttonTextColor,
              zIndex: 2
            }}
            onClick={onClickGetPieceMoves}
            disabled={getDisabledStatus()}
          >{checkerPiece.key}</button>
        ): (
          <>{checkerPiece.key}</>
        )}
        
    </li>
  )
}