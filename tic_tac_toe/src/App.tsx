import React, { ReactNode, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { usePlayer } from './context/playerContext';
import { useGameContext } from './context/gameContext';
import { BoardInfo } from './models';

function App() {
  const { 
    initBoard, 
    availableMoves, 
    gamePieces, 
    boardInfo, 
    setGamePieces, 
    setAvailableMoves, 
    initMoves, 
    secondGameAvMoves, 
    setSecondGameAvMoves ,
    secondGamePieces,
    setSecondGamePieces
  } = useBoard()
  const { playerTurn, setPlayerTurn, determinePlayerWin, determineGameTwoPlayerWin } = usePlayer()
  const { gameCount, setGameCount } = useGameContext()
  // TODO: make more dynamic
    const boardGame = (initBoard(["A", "B", "C"]))
  const [ secondBoardGame, setSecondBoardGame ] = useState<ReactNode | null>(null)
  const [ isGameOver, setIsGameOver ] = useState(false)
  const [ isGameTwoOver, setIsGameTwoOver ] = useState(false)
  const [ gameWinner, setGameWinner ] = useState<string | null>("")
  const [ gameTwoWinner, setGameTwoWinner ] = useState<string | null>("")

  useEffect(() => {
    if (isGameOver) {
      setGameCount(gameCount + 1)
    }
    // eslint-disable-next-line 
  }, [isGameOver])

  useEffect(() => {
    if (isGameTwoOver) {
      setGameCount(gameCount + 1)
    }
    // eslint-disable-next-line 
  }, [isGameTwoOver])

  useEffect(() => {
    if (gameCount === 2) {
      console.log("gameCount === 2")
      setSecondBoardGame(initBoard(["D", "E", "F"]))
      setSecondGameAvMoves(initMoves(["D", "E", "F"]))
      setSecondGamePieces(boardInfo(undefined, undefined, 2))
      setPlayerTurn("P1") // TODO: update this so that its the loser of the previous game
    } else if ( gameCount === 3) {
      console.log("gameCount === 3")
    }
    // eslint-disable-next-line 
  }, [gameCount])

  useEffect(() => {
    const check = determinePlayerWin(gamePieces)
    if (check !== null) {
      setAvailableMoves([])
      setGameWinner(check)
      setIsGameOver(true)
    }
    // eslint-disable-next-line 
  }, [availableMoves.length])

  useEffect(() => {
    if (secondGameAvMoves?.length === 0 && secondGamePieces !== null) {
      console.log('NO MOVES LEFT')
      const check = determineGameTwoPlayerWin(secondGamePieces)
      if (check !== null) {
        setSecondGameAvMoves([])
        setGameTwoWinner(check)
        setIsGameTwoOver(true)
      }
    }
    // eslint-disable-next-line 
  }, [secondGameAvMoves?.length])

  function handlePlayerTurn(moves: string[]) {
    if (moves.length === 0) {
      setPlayerTurn(null)
      setIsGameOver(true)
    } else {
      playerTurn === 'P1' ? setPlayerTurn('P2') : setPlayerTurn('P1')
    }
  }

  function handlePieceMove(move: string) {
    const newBoard = boardInfo(move, gamePieces)
    setGamePieces(newBoard)
    const newAvailableMoves = availableMoves.filter(avm => avm !== move)
    setAvailableMoves(newAvailableMoves)
    handlePlayerTurn(newAvailableMoves)

    // TODO: Make this more dynamic. current goal is to get working
    if (gameCount === 2) {
      const secondNewBoard = boardInfo(move, secondGamePieces as BoardInfo)
      setSecondGamePieces(secondNewBoard)
      const secondAvMoves = (secondGameAvMoves as string[]).filter(avm => avm !== move)
      setSecondGameAvMoves(secondAvMoves)
      handlePlayerTurn(secondAvMoves)
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
          <h4>2nd Game: Won by {gameTwoWinner}</h4>
          {secondBoardGame}
        </div>

        <div>
          <h4>3rd Game</h4>
          {gameCount === 3 && <p>hello third game</p>}
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
          {/* TODO: Clean up to work dynamically with available moves */}
          {secondGameAvMoves !== null && secondGameAvMoves.map(move => {
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
