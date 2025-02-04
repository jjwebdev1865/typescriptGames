import React from "react";

interface PieceSpotProps {
  checkerPiece: any,
  rowIndex: number
}

export const PieceSpot = ({checkerPiece, rowIndex}: PieceSpotProps) => {
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

  return (
    <li 
      key={`board-spot-${checkerPiece.key}`} 
      style={{ 
        listStyle: 'none', 
        backgroundColor: backgroundColor,
        color: textColor,
        textAlign: 'center'
      }}
      >
        {checkerPiece.piece !== null ? (
          <button 
            style={{ backgroundColor: buttonColor , padding: '5px 10px', color: buttonTextColor}}
            onClick={() => alert('clicked')}
          >{checkerPiece.key}</button>
        ): (
          <>{checkerPiece.key}</>
        )}
        
    </li>
  )
}