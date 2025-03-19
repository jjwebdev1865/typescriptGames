import { useBoard } from "../../context/boardContext"
import { StyledBoardSpot } from "./BoardSpot.styled"

interface BoardSpotProps {
  row: string
  index: number
}

export const BoardSpot = ({ row, index }: BoardSpotProps) => {
  const { gamePieces, secondGamePieces, thirdGamePieces } = useBoard()
  const spotTitle = `${row}${index}`

  let checkPlayerStatus = null
  Object.entries(gamePieces).forEach(([ key, value ]) => {
    if (key === spotTitle && value.player !== null) {
      checkPlayerStatus = value.player
    }
  })

  if (secondGamePieces !== null) {
    Object.entries(secondGamePieces).forEach(([ key, value ]) => {
      if (key === spotTitle && value.player !== null) {
        checkPlayerStatus = value.player
      }
    })
  }

  if (thirdGamePieces !== null) {
    Object.entries(thirdGamePieces).forEach(([ key, value ]) => {
      if (key === spotTitle && value.player !== null) {
        checkPlayerStatus = value.player
      }
    })
  }
  
  return (
    <StyledBoardSpot data-testid={`board-spot-${spotTitle}`} $player={checkPlayerStatus}>
      {spotTitle}
    </StyledBoardSpot>
  )
}