import React from "react";

const numberOfRows = 8

export const ChessBoard = () => {

  return (
    <div data-testid='chest-board-container' style={{ border: '3px solid black', width: '80%'}}>
      <ChessBoardFiles number={8} />
      <ChessBoardFiles number={7} />
      <ChessBoardFiles number={6} />
      <ChessBoardFiles number={5} />
      <ChessBoardFiles number={4} />
      <ChessBoardFiles number={3} />
      <ChessBoardFiles number={2} />
      <ChessBoardFiles number={1} />
    </div>
  )
}

interface ChessBoardFilesProps {
  number: number
}
const ChessBoardFiles = ({number}: ChessBoardFilesProps) => {
  return (
    <div data-test={`chess-board-files-${number}`} style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: '75px'}}>
      <ChestBoardColumn square={`A${number}`} />
      <ChestBoardColumn square={`B${number}`} />
      <ChestBoardColumn square={`C${number}`} />
      <ChestBoardColumn square={`D${number}`} />
      <ChestBoardColumn square={`E${number}`} />
      <ChestBoardColumn square={`F${number}`} />
      <ChestBoardColumn square={`G${number}`} />
      <ChestBoardColumn square={`H${number}`} />
    </div>
  )
}

interface ChestBoardColumnProps {
  square: string
}
const ChestBoardColumn = ({ square }: ChestBoardColumnProps) => {
  return (
    <div data-testid={`chess-board-square`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {square}
    </div>
  )
}