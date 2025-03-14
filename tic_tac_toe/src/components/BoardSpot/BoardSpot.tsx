import { useBoard } from "../../context/boardContext"
import { StyledBoardSpot } from "./BoardSpot.styles"

interface BoardSpotProps {
  row: string
  index: number
}

export const BoardSpot = ({ row, index }: BoardSpotProps) => {
  const { gamePieces, secondGamePieces } = useBoard()
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
  
  return (
    <StyledBoardSpot $player={checkPlayerStatus}>
      {spotTitle}
    </StyledBoardSpot>
  )
}