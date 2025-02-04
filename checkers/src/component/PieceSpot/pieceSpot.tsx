import React from "react";

interface PieceSpotProps {
  piece: any,
  rowIndex: number
}

const oddRows = ['A', 'C', 'E', 'G']

export const PieceSpot = ({piece, rowIndex}: PieceSpotProps) => {
  const pieceNumber = piece.key.split("")[1]
  let backgroundColor = '#F5E6D3'
  let textColor = 'black'

  if (rowIndex % 2 === 0 && Number(pieceNumber)  % 2 === 0) {
    backgroundColor = '#3D2B1F'
    textColor = '#FFFFFF'
  } else if (rowIndex % 2 !== 0 && Number(pieceNumber)  % 2 !== 0) {
    backgroundColor = '#3D2B1F'
    textColor = '#FFFFFF'
  }
  return (
    <li 
      key={`board-spot-${piece.key}`} 
      style={{ 
        listStyle: 'none', 
        backgroundColor: backgroundColor,
        color: textColor,
        textAlign: 'center'
      }}
      >
        {piece.key}
    </li>
  )
}