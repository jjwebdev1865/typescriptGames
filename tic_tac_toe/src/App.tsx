import React, { ReactNode, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { usePlayer } from './context/playerContext';

function App() {
  const { initBoard, availableMoves, gamePieces, boardInfo, setGamePieces, setAvailableMoves } = useBoard()
  const { playerTurn, setPlayerTurn, determinePlayerWin } = usePlayer()
  const [boardGame, setBoardGame] = useState<ReactNode | null>(initBoard)

  // TODO: end game useEffect
  useEffect(() => {
    if (availableMoves.length === 0) {
      determinePlayerWin(gamePieces)
      const gameOverBoard = (
        <div>
          {boardGame}
          <strong>Game Over</strong>
        </div>
      )
      setBoardGame(gameOverBoard)
    }
    // eslint-disable-next-line 
  }, [availableMoves])

  function handlePieceMove(move: string) {
    const newBoard = boardInfo(move, gamePieces)
    setGamePieces(newBoard)
    const newAvailableMoves = availableMoves.filter(avm => avm !== move)
    setAvailableMoves(newAvailableMoves)
    playerTurn === 'P1' ? setPlayerTurn('P2') : setPlayerTurn('P1')
  }


  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1>Tic Tac Toe</h1>
      <h2>This is a best of 3 game</h2>

      <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>

        <div>
          <h4>1st Game</h4>
          {boardGame}
        </div>
        
        <div>
          <h4>2nd Game</h4>
        </div>

        <div>
          <h4>3rd Game</h4>
        </div>
      </div>

      <div style={{ textAlign: 'center'}}>
        <h2>Player Turn: {playerTurn}</h2>
        <h3>Available Moves</h3>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center'}}>
          {availableMoves.map(move => {
            return (
              <li key={`available-move-${move}`}>
                <button onClick={() => handlePieceMove(move)}>{move}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
