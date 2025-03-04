import React, { Dispatch, SetStateAction } from 'react';
import { useMoves } from '../../context/movesContext';
import { useGame } from '../../context/gameContext';
import { PieceInfoFE } from '../../types';
import { StyledChessPiece, StyledPieceSpot } from './pieceSpot.styles';

interface PieceSpotProps {
  checkerPiece: PieceInfoFE,
  rowIndex: number,
  setAvailableMoves: Dispatch<SetStateAction<string[]>>,
  setSelectedPiece: React.Dispatch<React.SetStateAction<PieceInfoFE | undefined>>
}

export const PieceSpot = ({ checkerPiece, rowIndex, setAvailableMoves, setSelectedPiece }: PieceSpotProps) => {
  const { getPieceMoves, getKingMoves } = useMoves()
  const { playerTurn } = useGame()
  const pieceNumber = checkerPiece.key.split('')[1]
  let backgroundColor = undefined
  let textColor = undefined

  if (rowIndex % 2 === 0 && Number(pieceNumber) % 2 === 0) {
    backgroundColor = '#3D2B1F'
    textColor = '#FFFFFF'
  } else if (rowIndex % 2 !== 0 && Number(pieceNumber)  % 2 !== 0) {
    backgroundColor = '#3D2B1F'
    textColor = '#FFFFFF'
  }

  let buttonColor = (checkerPiece.piece !== null && checkerPiece.piece === 1 )? 'red' : undefined
  if (getDisabledStatus()) {
    buttonColor = 'gray'
  }

  const onClickGetPieceMoves = () => {
    let moveOptions: string[] = []
    if ( checkerPiece.isKing ) {
      moveOptions = getKingMoves(checkerPiece)
    } else {
      moveOptions = getPieceMoves(checkerPiece)
    }
    setAvailableMoves(moveOptions)
    setSelectedPiece(checkerPiece)
  }

  function getDisabledStatus(): boolean {
    const playerTurnKey = playerTurn.split('')[1]
    if (checkerPiece.piece !== Number(playerTurnKey)) {
      return true
    } else {
      return false
    }
  }

  return (
    <StyledPieceSpot
      data-testid={`spot-${checkerPiece.key}`}
      $tilecolor={backgroundColor}
      $textcolor={textColor}
      >
        {checkerPiece.piece !== null ? (
          <StyledChessPiece
            $piececolor={buttonColor}
            onClick={onClickGetPieceMoves}
            disabled={getDisabledStatus()}
          >{checkerPiece.key}</StyledChessPiece>
        ): (
          <>{checkerPiece.key}</>
        )}

    </StyledPieceSpot>
  )
}
