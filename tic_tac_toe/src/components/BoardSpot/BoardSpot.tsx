import { StyledBoardSpot } from "./BoardSpot.styles"

interface BoardSpotProps {
  row: string
  index: number
}

export const BoardSpot = ({ row, index }: BoardSpotProps) => {
  const spotTitle = `${row}-${index}`
  return (
    <StyledBoardSpot>
      <button onClick={() => alert(`${spotTitle} clicked!`)}>{spotTitle}</button>
    </StyledBoardSpot>
  )
}