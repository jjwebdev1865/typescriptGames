import React, { ReactNode, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { usePlayer } from './context/playerContext';
import { useGameContext } from './context/gameContext';
import { BoardInfo } from './models';

const gameOneRows = ["A", "B", "C"]
const gameTwoRows = ["D", "E", "F"]
const gameThreeRows = ["G", "H", "I"]

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
    setSecondGamePieces,
    thirdGameAvMoves,
    setThirdGameAvMoves,
    thirdGamePieces,
    setThirdGamePieces
  } = useBoard()
  const { playerTurn, setPlayerTurn, determinePlayerWin, determineGameTwoPlayerWin, determineGameThreePlayerWin } = usePlayer()
  const { gameCount, setGameCount } = useGameContext()
  // TODO: make more dynamic
  const boardGame = (initBoard(gameOneRows))
  const [ secondBoardGame, setSecondBoardGame ] = useState<ReactNode | null>(null)
  const [ thirdBoardGame, setThirdBoardGame ] = useState<ReactNode | null>(null)
  const [ isGameOver, setIsGameOver ] = useState(false)
  const [ isGameTwoOver, setIsGameTwoOver ] = useState(false)
  const [ isGameThreeOver, setIsGameThreeOver ] = useState(false)
  const [ gameWinner, setGameWinner ] = useState<string | null>("")
  const [ gameTwoWinner, setGameTwoWinner ] = useState<string | null>("")
  const [ gameThreeWinner, setGameThreeWinner ] = useState<string | null>("")

  useEffect(() => {
    if (isGameOver && isGameTwoOver && isGameThreeOver) {
      alert('Conclusion of this game!!')
    } else if (isGameOver && isGameTwoOver) {
      setGameCount(gameCount + 1)
    } else if (isGameOver) {
      setGameCount(gameCount + 1)
    }
    // eslint-disable-next-line 
  }, [isGameOver, isGameTwoOver, isGameThreeOver])

  useEffect(() => {
    if (gameCount === 2) {
      setSecondBoardGame(initBoard(gameTwoRows))
      setSecondGameAvMoves(initMoves(gameTwoRows))
      setSecondGamePieces(boardInfo(undefined, undefined, 2))
      setPlayerTurn("P1") // TODO: update this so that its the loser of the previous game
    } else if ( gameCount === 3) {
      setThirdBoardGame(initBoard(gameThreeRows))
      setThirdGameAvMoves(initMoves(gameThreeRows))
      setThirdGamePieces(boardInfo(undefined, undefined, 3))
      setPlayerTurn("P1") // TODO: update this so that its the loser of the previous game
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
    if ((isGameOver && !isGameTwoOver && secondGamePieces !== null) || (secondGamePieces !== null && secondGameAvMoves?.length === 0)) {
      const check = determineGameTwoPlayerWin(secondGamePieces)
      if (check !== null) {
        setSecondGameAvMoves([])
        setGameTwoWinner(check)
        setIsGameTwoOver(true)
      }
    }
    // eslint-disable-next-line 
  }, [secondGameAvMoves?.length])

  useEffect(() => {
    if ((isGameOver && isGameTwoOver && !isGameThreeOver && thirdGamePieces !== null) || (thirdGamePieces !== null && thirdGameAvMoves?.length === 0)) {
      const check = determineGameThreePlayerWin(thirdGamePieces)
      if (check !== null) {
        setThirdGameAvMoves([])
        setGameThreeWinner(check)
        setIsGameThreeOver(true)
      }
    }
    // eslint-disable-next-line 
  }, [thirdGameAvMoves?.length])

  function handlePlayerTurn(moves: string[]) {
    if (moves.length === 0 && gameCount === 1) {
      setPlayerTurn(null)
      setIsGameOver(true)
    } else if (gameCount === 2 && moves.length === 0) {
      setPlayerTurn(null)
      setIsGameTwoOver(true)
    } else if (gameCount === 3 && moves.length === 0) {
      setPlayerTurn(null)
      setIsGameThreeOver(true)
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
  }

  function handleGameTwoPieceMove(move: string) {
    const secondNewBoard = boardInfo(move, secondGamePieces as BoardInfo)
    setSecondGamePieces(secondNewBoard)
    const secondAvMoves = (secondGameAvMoves as string[]).filter(avm => avm !== move)
    setSecondGameAvMoves(secondAvMoves)
    handlePlayerTurn(secondAvMoves)
  }

  function handleGameThreePieceMove(move:string) {
    const thirdNewBoard = boardInfo(move, thirdGamePieces as BoardInfo)
    setThirdGamePieces(thirdNewBoard)
    const thirdAvMoves = (thirdGameAvMoves as string[]).filter(avm => avm !== move)
    setThirdGameAvMoves(thirdAvMoves)
    handlePlayerTurn(thirdAvMoves)
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
          <h4>3rd Game: Won by {gameThreeWinner}</h4>
          {thirdBoardGame}
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
                <button onClick={() => handleGameTwoPieceMove(move)}>{move}</button>                
              </li>
            )
          })}

          {thirdGameAvMoves !== null && thirdGameAvMoves.map(move => {
            return (
              <li key={`available-move-${move}`}>
                <button onClick={() => handleGameThreePieceMove(move)}>{move}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
