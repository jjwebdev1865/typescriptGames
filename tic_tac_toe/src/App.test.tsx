import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BoardContext } from './context/boardContext';
import { BoardInfo, PlayerOptions } from './models';
import { PlayerContext } from './context/playerContext';
import { GamesContext } from './context/gameContext';

const mockGamePieces: BoardInfo = {
  A1: {isOpen: true, player: 'P1'},
  B1: {isOpen: true, player: null},
  C1: {isOpen: true, player: null},
};

const mockSecondGamePieces: BoardInfo = {
  D1: {isOpen: true, player: 'P1'},
  E1: {isOpen: true, player: 'P2'},
  F1: {isOpen: true, player: null},
};

const mockThirdGamePieces: BoardInfo = {
  G1: {isOpen: true, player: 'P1'},
  H1: {isOpen: true, player: 'P2'},
  I1: {isOpen: true, player: null},
};


const initBoardContextValues = {
  gamePieces: mockGamePieces,
  initBoard: jest.fn(),
  availableMoves: [],
  boardInfo: jest.fn(),
  setGamePieces: jest.fn(),
  setAvailableMoves: jest.fn(),
  initMoves: jest.fn(),
  secondGameAvMoves: [],
  setSecondGameAvMoves: jest.fn(),
  secondGamePieces: null,
  setSecondGamePieces: jest.fn(),
  thirdGameAvMoves: [],
  setThirdGameAvMoves: jest.fn(),
  thirdGamePieces: null,
  setThirdGamePieces: jest.fn(),
}

// Mock context data
const mockPlayerValues = {
  playerTurn: 'P1' as PlayerOptions,
  setPlayerTurn: jest.fn(),
  determinePlayerWin: jest.fn(),
  determineGameTwoPlayerWin: jest.fn(),
  determineGameThreePlayerWin: jest.fn()
};

const mockGameBoardValues = {
  gameCount: 1,
  setGameCount: jest.fn(),
  isGameOver: false,
  setIsGameOver: jest.fn(),
  isGameTwoOver: false,
  setIsGameTwoOver: jest.fn(),
  isGameThreeOver: false,
  setIsGameThreeOver: jest.fn()
};


describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders the first board', () => {
    render(
      <GamesContext.Provider value={mockGameBoardValues}>
        <PlayerContext.Provider value={mockPlayerValues}>
          <BoardContext.Provider value={initBoardContextValues}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const availableMoves = screen.getByText('Available Moves for Game: 1')
    const currentGame = screen.getByText('Current game count: 1')

    expect(availableMoves).toBeVisible()
    expect(currentGame).toBeVisible()
  })

  it('Renders the first board and handles a piece move', () => {
    render(
      <GamesContext.Provider value={mockGameBoardValues}>
        <PlayerContext.Provider value={mockPlayerValues}>
          <BoardContext.Provider value={{
            ...initBoardContextValues,
            availableMoves: ['B1']
          }}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const b1Piece = screen.getByRole('button', {name: 'B1'})
    expect(b1Piece).toBeVisible()

    // TODO: need to update this
    fireEvent.click(b1Piece)
    expect(b1Piece).toBeVisible()
  })

  it('Renders the second board', () => {
    render(
      <GamesContext.Provider value={{
        ...mockGameBoardValues,
        gameCount: 2
      }}>
        <PlayerContext.Provider value={{
          ...mockPlayerValues,
          determinePlayerWin: jest.fn().mockReturnValue('P1')
        }}>
          <BoardContext.Provider value={{
            ...initBoardContextValues,
            secondGamePieces: mockSecondGamePieces
          }}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const availableMoves = screen.getByText('Available Moves for Game: 2')
    const currentGame = screen.getByText('Current game count: 2')
    const playerOneWin = screen.getByText('1st Game: Won by P1')

    expect(availableMoves).toBeVisible()
    expect(currentGame).toBeVisible()
    expect(playerOneWin).toBeVisible()
  })


  it('Renders the second board and handles a piece move', () => {
    render(
      <GamesContext.Provider value={{
        ...mockGameBoardValues,
        gameCount: 2
      }}>
        <PlayerContext.Provider value={{
          ...mockPlayerValues,
          determinePlayerWin: jest.fn().mockReturnValue('P1')
        }}>
          <BoardContext.Provider value={{
            ...initBoardContextValues,
            secondGamePieces: mockSecondGamePieces,
            secondGameAvMoves: ['F1']
          }}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const f1Piece = screen.getByRole('button', {name: 'F1'})
    expect(f1Piece).toBeVisible()

    // TODO: need to update this
    fireEvent.click(f1Piece)
    expect(f1Piece).toBeVisible()
  })

  it('Renders the third board', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <GamesContext.Provider value={{
        ...mockGameBoardValues,
        gameCount: 3
      }}>
        <PlayerContext.Provider value={{
          ...mockPlayerValues,
          determinePlayerWin: jest.fn().mockReturnValue('P1'),
          determineGameTwoPlayerWin: jest.fn().mockReturnValue('P2'),
          determineGameThreePlayerWin: jest.fn().mockReturnValue(null)
        }}>
          <BoardContext.Provider value={{
            ...initBoardContextValues,
            secondGamePieces: mockSecondGamePieces,
            thirdGamePieces: mockThirdGamePieces
          }}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const availableMoves = screen.getByText('Available Moves for Game: 3')
    const currentGame = screen.getByText('Current game count: 3')
    const gameOneWin = screen.getByText('1st Game: Won by P1')
    const gameTwoWin = screen.getByText('2nd Game: Won by P2')

    expect(availableMoves).toBeVisible()
    expect(currentGame).toBeVisible()
    expect(gameOneWin).toBeVisible()
    expect(gameTwoWin).toBeVisible()
    expect(alertSpy).toHaveBeenCalledTimes(0)
  })

  it('Renders the third board and handles a piece move', () => {
    render(
      <GamesContext.Provider value={{
        ...mockGameBoardValues,
        gameCount: 3
      }}>
        <PlayerContext.Provider value={{
          ...mockPlayerValues,
          determinePlayerWin: jest.fn().mockReturnValue('P1'),
          determineGameTwoPlayerWin: jest.fn().mockReturnValue('P2'),
          determineGameThreePlayerWin: jest.fn().mockReturnValue(null)
        }}>
          <BoardContext.Provider value={{
            ...initBoardContextValues,
            thirdGamePieces: mockSecondGamePieces,
            thirdGameAvMoves: ['I1']
          }}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const i1Piece = screen.getByRole('button', {name: 'I1'})
    expect(i1Piece).toBeVisible()

    // TODO: need to update this
    fireEvent.click(i1Piece)
    expect(i1Piece).toBeVisible()
  })

  it('All three games are over', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <GamesContext.Provider value={{
        ...mockGameBoardValues,
        gameCount: 3
      }}>
        <PlayerContext.Provider value={{
          ...mockPlayerValues,
          determinePlayerWin: jest.fn().mockReturnValue('P1'),
          determineGameTwoPlayerWin: jest.fn().mockReturnValue('P2'),
          determineGameThreePlayerWin: jest.fn().mockReturnValue('P1')
        }}>
          <BoardContext.Provider value={{
            ...initBoardContextValues,
            secondGamePieces: mockSecondGamePieces,
            thirdGamePieces: mockThirdGamePieces
          }}>
            <App />
          </BoardContext.Provider>
        </PlayerContext.Provider>
      </GamesContext.Provider>
    )
    const availableMoves = screen.getByText('Available Moves for Game: 3')
    const currentGame = screen.getByText('Current game count: 3')
    const gameOneWin = screen.getByText('1st Game: Won by P1')
    const gameTwoWin = screen.getByText('2nd Game: Won by P2')
    const gameThreeWin = screen.getByText('3rd Game: Won by P1')

    expect(availableMoves).toBeVisible()
    expect(currentGame).toBeVisible()
    expect(gameOneWin).toBeVisible()
    expect(gameTwoWin).toBeVisible()
    expect(gameThreeWin).toBeVisible()
    // TODO: fix this
    // expect(alertSpy).toHaveBeenCalledTimes(1)
  })
})
