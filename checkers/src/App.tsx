import React, { useEffect, useState } from 'react';

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function App() {

  const board: Object = {}
  for (let i = 0; i< rows.length; i++) {
    board[rows[i]] = [
      { position: 1, piece: null },
      { position: 2, piece: null },
      { position: 3, piece: null },
      { position: 4, piece: null },
      { position: 5, piece: null },
      { position: 6, piece: null },
      { position: 7, piece: null },
      { position: 8, piece: null }
    ]
  }

  function getBoardRowsArray() {
    const boardDisplay: any[] = []
    Object.entries(board).forEach(([key, value]) => {
      const rowDetails: string[] = []
      for (let i = 0; i < value.length; i++) {
        rowDetails.push(`${key}${value[i].position}`)
      }
      boardDisplay.push(rowDetails)
    })
    return boardDisplay
  }

  function getBoardRows() {
    const boardDisplay = getBoardRowsArray()
    const boardHtmlDisplay = boardDisplay.map(row => {
      const rowKey = row[0].split("")[0]

      return <li key={`board-row-${rowKey}`} style={{ listStyle: 'none'}}>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(8, auto)' }}>
          {row.map((piece: string) => {
            return (
              <li key={`board-spot-${piece}`} style={{ listStyle: 'none'}}>
                {piece}
              </li>
            )
          })}
        </ul>
      </li>
    })

    return boardHtmlDisplay
  }

  return (
    <div className="App">
      <h1>Checkers</h1>

      <ul>
        {getBoardRows()}
      </ul>
    </div>
  );
}

export default App;
