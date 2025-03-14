import React, { ReactNode, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { usePlayer } from './context/playerContext';
import { useGameContext } from './context/gameContext';

function App() {
  const { initBoard, availableMoves, gamePieces, boardInfo, setGamePieces, setAvailableMoves } = useBoard()
  const { playerTurn, setPlayerTurn, determinePlayerWin } = usePlayer()
  const { gameCount, setGameCount } = useGameContext()
  const [ boardGame, setBoardGame ] = useState<ReactNode | null>(initBoard(["A", "B", "C"]))
  const [ secondBoardGame, setSecondBoardGame ] = useState<ReactNode | null>(null)
  const [ isGameOver, setIsGameOver ] = useState(false)
  const [ gameWinner, setGameWinner ] = useState<string | null>("")

  useEffect(() => {
    if (isGameOver) {
      const gameOverBoard = (
        <div>
          {boardGame}
        </div>
      )
      setBoardGame(gameOverBoard)
      setGameCount(gameCount + 1)
      setSecondBoardGame(initBoard(["D", "E", "F"]))
    }
    // eslint-disable-next-line 
  }, [isGameOver])

  useEffect(() => {
    const check = determinePlayerWin(gamePieces)
    if (check !== null) {
      setAvailableMoves([])
      setGameWinner(check)
      setIsGameOver(true)
    }
    // eslint-disable-next-line 
  }, [availableMoves.length])

  function handlePieceMove(move: string) {
    const newBoard = boardInfo(move, gamePieces)
    setGamePieces(newBoard)
    const newAvailableMoves = availableMoves.filter(avm => avm !== move)
    setAvailableMoves(newAvailableMoves)
    if (newAvailableMoves.length === 0) {
      setPlayerTurn(null)
      setIsGameOver(true)
    } else {
      playerTurn === 'P1' ? setPlayerTurn('P2') : setPlayerTurn('P1')
    }
  }


  return (
    <div className="App" style={{ textAlign: 'center'}}>
      <h1>Tic Tac Toe</h1>
      <h2>This is a best of 3 game</h2>
      <h3>Current game count: {gameCount}</h3>

      <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>

        <div>
          <h4>1st Game: Won by {gameWinner}</h4>
          {boardGame}
        </div>
        
        <div>
          <h4>2nd Game</h4>
          {gameCount === 2 && secondBoardGame}
        </div>

        <div>
          <h4>3rd Game</h4>
        </div>
      </div>

      <div style={{ textAlign: 'center'}}>
        <h2>Player Turn: {playerTurn}</h2>
        <h3>Available Moves for Game: {gameCount}</h3>
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
