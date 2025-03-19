interface AvailableMovesProps {
  move: string
  handleMove: (move: string) => void
}

export const AvailableMove = ({move, handleMove}: AvailableMovesProps) => (
  <li data-testid={`available-move-${move}`}>
    <button onClick={() => handleMove(move)}>{move}</button>
  </li>
)