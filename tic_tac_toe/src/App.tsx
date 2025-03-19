import React, { JSX, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { usePlayer } from './context/playerContext';
import { useGameContext } from './context/gameContext';
import { BoardInfo } from './models';
import { AvailableMove } from './components/AvailableMove/AvailableMove';
import { GameBoard } from './components/GameBoard/GameBoard';
import { StyledAvailableMovesContainer, StyledGameBoardsContainer } from './App.styled';

const gameOneRows = ['A', 'B', 'C']
const gameTwoRows = ['D', 'E', 'F']
const gameThreeRows = ['G', 'H', 'I']

function App(): JSX.Element {
  const {
    initBoard,
    availableMoves,
    gamePieces,
    boardInfo,
    setGamePieces,
    setAvailableMoves,
    initMoves,
    secondGameAvMoves,
    setSecondGameAvMoves,
    secondGamePieces,
    setSecondGamePieces,
    thirdGameAvMoves,
    setThirdGameAvMoves,
    thirdGamePieces,
    setThirdGamePieces
  } = useBoard()
  const { playerTurn, setPlayerTurn, determinePlayerWin, determineGameTwoPlayerWin, determineGameThreePlayerWin } = usePlayer()
  const { gameCount, setGameCount, isGameOver, setIsGameOver, isGameTwoOver, setIsGameTwoOver, isGameThreeOver, setIsGameThreeOver } = useGameContext()
  // TODO: make more dynamic
  const boardGame = initBoard(gameOneRows)
  const [ secondBoardGame, setSecondBoardGame ] = useState<JSX.Element | null>(null)
  const [ thirdBoardGame, setThirdBoardGame ] = useState<JSX.Element | null>(null)
  // const [ isGameOver, setIsGameOver ] = useState(false)
  const [ gameWinner, setGameWinner ] = useState<string | null>('')
  const [ gameTwoWinner, setGameTwoWinner ] = useState<string | null>('')
  const [ gameThreeWinner, setGameThreeWinner ] = useState<string | null>('')

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
      setPlayerTurn('P1') // TODO: update this so that its the loser of the previous game
    } else if ( gameCount === 3) {
      setThirdBoardGame(initBoard(gameThreeRows))
      setThirdGameAvMoves(initMoves(gameThreeRows))
      setThirdGamePieces(boardInfo(undefined, undefined, 3))
      setPlayerTurn('P1') // TODO: update this so that its the loser of the previous game
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
    <div className='App' style={{ textAlign: 'center'}}>
      <h1>Tic Tac Toe</h1>
      <h2>This is a best of 3 game</h2>
      <h3>Current game count: {gameCount}</h3>

      <StyledGameBoardsContainer>
        <GameBoard gameWinner={gameWinner} boardGame={boardGame} gameString='1st' />
        <GameBoard gameWinner={gameTwoWinner} boardGame={secondBoardGame} gameString='2nd' />
        <GameBoard gameWinner={gameThreeWinner} boardGame={thirdBoardGame} gameString='3rd' />
      </StyledGameBoardsContainer>

      <div style={{ textAlign: 'center'}}>
        <h2>Player Turn: {playerTurn}</h2>
        <h3>Available Moves for Game: {gameCount}</h3>
        <StyledAvailableMovesContainer>
          {availableMoves.map(move => {
            return <AvailableMove key={`available-move-${move}`} move={move} handleMove={handlePieceMove} />
          })}

          {secondGameAvMoves !== null && secondGameAvMoves.map(move => {
            return <AvailableMove key={`available-move-${move}`} move={move} handleMove={handleGameTwoPieceMove} />
          })}

          {thirdGameAvMoves !== null && thirdGameAvMoves.map(move => {
            return <AvailableMove key={`available-move-${move}`} move={move} handleMove={handleGameThreePieceMove} />
          })}
        </StyledAvailableMovesContainer>
      </div>
    </div>
  );
}

export default App;
