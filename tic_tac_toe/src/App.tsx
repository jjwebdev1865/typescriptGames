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
    gamePieces,
    boardInfo,
    setGamePieces,
    initMoves,
    secondGamePieces,
    setSecondGamePieces,
    thirdGamePieces,
    setThirdGamePieces,
    currentAvMoves,
    setCurrentAvMoves
  } = useBoard()
  const { playerTurn, setPlayerTurn, determinePlayerWin, determineGameTwoPlayerWin, determineGameThreePlayerWin } = usePlayer()
  const { gameCount, setGameCount, isGameOver, setIsGameOver, isGameTwoOver, setIsGameTwoOver, isGameThreeOver, setIsGameThreeOver } = useGameContext()
  // TODO: make more dynamic
  const boardGame = initBoard(gameOneRows)
  const [ secondBoardGame, setSecondBoardGame ] = useState<JSX.Element | null>(null)
  const [ thirdBoardGame, setThirdBoardGame ] = useState<JSX.Element | null>(null)
  const [ gameWinner, setGameWinner ] = useState<string | null>(null)
  const [ gameTwoWinner, setGameTwoWinner ] = useState<string | null>(null)
  const [ gameThreeWinner, setGameThreeWinner ] = useState<string | null>(null)
  const [ determineMatchWinner, setDetermineMatchWinner ] = useState<boolean>(false)
  const [ matchWinner, setMatchWinner ] = useState<string | null>(null)

  useEffect(() => {
    if (isGameOver && isGameTwoOver && isGameThreeOver) {
      if (gameThreeWinner === null) {
        setGameThreeWinner('')
      }
      setGameCount(0)
      setDetermineMatchWinner(true)
    } else if (isGameOver && isGameTwoOver) {
      if (gameTwoWinner === null) {
        setGameTwoWinner('')
      }
      setGameCount(gameCount + 1)
    } else if (isGameOver) {
      if (gameWinner === null) {
        setGameWinner('')
      }
      setGameCount(gameCount + 1)
    }
    // eslint-disable-next-line
  }, [isGameOver, isGameTwoOver, isGameThreeOver])

  useEffect(() => {
    if (determineMatchWinner) {
      const playerOneCount = [gameWinner, gameTwoWinner, gameThreeWinner].filter(obj => obj === 'P1').length
      const playerTwoCount = [gameWinner, gameTwoWinner, gameThreeWinner].filter(obj => obj === 'P2').length
      playerOneCount === playerTwoCount ? setMatchWinner('Split Decision') : playerOneCount > playerTwoCount ? setMatchWinner('P1') : setMatchWinner('P2')
    }
  }, [determineMatchWinner])

  useEffect(() => {
    if (gameCount === 2) {
      setSecondBoardGame(initBoard(gameTwoRows))
      setCurrentAvMoves(initMoves(gameTwoRows))
      setSecondGamePieces(boardInfo(undefined, undefined, 2))
      setPlayerTurn('P1') // TODO: update this so that its the loser of the previous game
    } else if ( gameCount === 3) {
      setThirdBoardGame(initBoard(gameThreeRows))
      setCurrentAvMoves(initMoves(gameThreeRows))
      setThirdGamePieces(boardInfo(undefined, undefined, 3))
      setPlayerTurn('P1') // TODO: update this so that its the loser of the previous game
    }
    // eslint-disable-next-line
  }, [gameCount])

  useEffect(() => {
    const check = determinePlayerWin(gamePieces)
    if (check !== null) {
      setGameWinner(check)
      setIsGameOver(true)
    }
    // eslint-disable-next-line
}, [currentAvMoves.length])

  useEffect(() => {
    if ((isGameOver && !isGameTwoOver && secondGamePieces !== null) || (secondGamePieces !== null && currentAvMoves?.length === 0)) {
      const check = determineGameTwoPlayerWin(secondGamePieces)
      if (check !== null) {
        setGameTwoWinner(check)
        setIsGameTwoOver(true)
      }
    }
    // eslint-disable-next-line
  }, [currentAvMoves?.length, secondGamePieces])

  useEffect(() => {
    if ((isGameOver && isGameTwoOver && !isGameThreeOver && thirdGamePieces !== null) || (thirdGamePieces !== null && currentAvMoves?.length === 0)) {
      const check = determineGameThreePlayerWin(thirdGamePieces)
      if (check !== null) {
        setCurrentAvMoves([])
        setGameThreeWinner(check)
        setIsGameThreeOver(true)
      }
    }
    // eslint-disable-next-line
  }, [currentAvMoves?.length, thirdGamePieces])

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

      <StyledGameBoardsContainer>
        <GameBoard gameWinner={gameWinner} boardGame={boardGame} gameString='1st' />
        <GameBoard gameWinner={gameTwoWinner} boardGame={secondBoardGame} gameString='2nd' />
        <GameBoard gameWinner={gameThreeWinner} boardGame={thirdBoardGame} gameString='3rd' />
      </StyledGameBoardsContainer>

      <div style={{ textAlign: 'center'}}>
        {!determineMatchWinner ? (
          <>
            <h2>Player Turn: {playerTurn}</h2>
            <h3>Available Moves for Game: {gameCount}</h3>
          </>
        ): (
          <>
            <h2>Match Winner is: {matchWinner}</h2>
          </>
        )}

        {!determineMatchWinner && (
          <>
            <StyledAvailableMovesContainer>
              {gameCount === 1 && currentAvMoves.map(move => {
                return <AvailableMove key={`available-move-${move}`} move={move} handleMove={() => {
                  handlePieceMove(move, gamePieces, setGamePieces)
                  handleMovesChange(move, currentAvMoves, setCurrentAvMoves)
                }} />
              })}

              {gameCount === 2 && currentAvMoves.length > 0 && currentAvMoves.map(move => {
                return <AvailableMove key={`available-move-${move}`} move={move} handleMove={() => {
                  handlePieceMove(move, secondGamePieces as BoardInfo, setSecondGamePieces)
                  handleMovesChange(move, currentAvMoves, setCurrentAvMoves)
                }} />
              })}

              {gameCount === 3 && currentAvMoves.length > 0 && currentAvMoves.map(move => {
                return <AvailableMove key={`available-move-${move}`} move={move} handleMove={() => {
                  handlePieceMove(move, thirdGamePieces as BoardInfo, setThirdGamePieces)
                  handleMovesChange(move, currentAvMoves, setCurrentAvMoves)
                }} />
              })}

            </StyledAvailableMovesContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '50% 50%'}}>
              <div>
                <h3>Computer to Decide Random Move</h3>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  {gameCount === 1 && (
                    <RandomMove
                      gameCount={gameCount}
                      handlePieceMove={handlePieceMove}
                      handleMovesChange={handleMovesChange}
                      setPieces={setGamePieces}
                      setAvMoves={setCurrentAvMoves}
                    />
                  )}

                  {gameCount === 2 && (
                    <RandomMove
                      gameCount={gameCount}
                      handlePieceMove={handlePieceMove}
                      handleMovesChange={handleMovesChange}
                      setPieces={setSecondGamePieces}
                      setAvMoves={setCurrentAvMoves}
                    />
                  )}

                  {gameCount === 3 && (
                    <RandomMove
                      gameCount={gameCount}
                      handlePieceMove={handlePieceMove}
                      handleMovesChange={handleMovesChange}
                      setPieces={setThirdGamePieces}
                      setAvMoves={setCurrentAvMoves}
                    />
                  )}
                </div>
              </div>
              <div>
                <h3>Computer to use MiniMax Alg</h3>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <p>TODO</p>
                </div>
              </div>
            </div>
          </>
        )}


      </div>
    </div>
  );
}

export default App;
