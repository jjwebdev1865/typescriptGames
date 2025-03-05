interface BoardSpotProps {
  row: string
  index: number
}

export const BoardSpot = ({ row, index }: BoardSpotProps) => {

  return (
    <li style={{ padding: '25px', border: '1px solid black'}}>
      {row}-buildSpot-{index}
    </li>
  )
}