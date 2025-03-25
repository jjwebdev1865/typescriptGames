import React, { JSX, useEffect, useState } from 'react';
import { useBoard } from './context/boardContext';
import { usePlayer } from './context/playerContext';
import { useGameContext } from './context/gameContext';
import { BoardInfo } from './models';
import { AvailableMove } from './components/AvailableMove/AvailableMove';
import { GameBoard } from './components/GameBoard/GameBoard';
import { StyledAvailableMovesContainer, StyledGameBoardsContainer } from './App.styled';
import { RandomMove } from './components/RandomMove/RandomMove';

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
  const [ gameWinner, setGameWinner ] = useState<string | null>('')
  const [ gameTwoWinner, setGameTwoWinner ] = useState<string | null>('')
  const [ gameThreeWinner, setGameThreeWinner ] = useState<string | null>('')

  useEffect(() => {
    if (isGameOver && isGameTwoOver && isGameThreeOver) {
      setGameCount(0)
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

  function handlePieceMove(move: string, gamePieces: BoardInfo, setGamePieces: (newBoard: BoardInfo) => void): void {
    const newBoard = boardInfo(move, gamePieces)
    setGamePieces(newBoard)
  }

  function handleMovesChange(move: string, moveOptions: string[], setAvMoves: (newAvailableMoves: string[]) => void) {
    const newAvailableMoves = moveOptions.filter(avm => avm !== move)
    setAvMoves(newAvailableMoves)
    handlePlayerTurn(newAvailableMoves)
  }
  // TODO: add a option for using min max formula to pic a random position

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
            return <AvailableMove key={`available-move-${move}`} move={move} handleMove={() => {
              handlePieceMove(move, gamePieces, setGamePieces)
              handleMovesChange(move, availableMoves, setAvailableMoves)
            }} />
          })}

          {secondGameAvMoves !== null && secondGameAvMoves.map(move => {
            return <AvailableMove key={`available-move-${move}`} move={move} handleMove={() => {
              handlePieceMove(move, secondGamePieces as BoardInfo, setSecondGamePieces)
              handleMovesChange(move, secondGameAvMoves, setSecondGameAvMoves)
            }} />
          })}

          {thirdGameAvMoves !== null && thirdGameAvMoves.map(move => {
            return <AvailableMove key={`available-move-${move}`} move={move} handleMove={() => {
              handlePieceMove(move, thirdGamePieces as BoardInfo, setThirdGamePieces)
              handleMovesChange(move, thirdGameAvMoves, setThirdGameAvMoves)
            }} />
          })}

        </StyledAvailableMovesContainer>

        <h3>Computer to Decide Random Move</h3>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          {gameCount === 1 && (
            <RandomMove 
              gameCount={gameCount} 
              handlePieceMove={handlePieceMove} 
              handleMovesChange={handleMovesChange} 
              setPieces={setGamePieces} 
              setAvMoves={setAvailableMoves}
            />
          )}

          {gameCount === 2 && (
            <RandomMove 
              gameCount={gameCount} 
              handlePieceMove={handlePieceMove} 
              handleMovesChange={handleMovesChange} 
              setPieces={setSecondGamePieces} 
              setAvMoves={setSecondGameAvMoves}
            />
          )}

          {gameCount === 3 && (
            <RandomMove 
              gameCount={gameCount} 
              handlePieceMove={handlePieceMove} 
              handleMovesChange={handleMovesChange} 
              setPieces={setThirdGamePieces} 
              setAvMoves={setThirdGameAvMoves}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
