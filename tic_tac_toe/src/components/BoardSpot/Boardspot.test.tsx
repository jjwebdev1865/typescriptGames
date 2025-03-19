import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BoardSpot } from './BoardSpot';
import { BoardContext } from '../../context/boardContext';
import { BoardInfo } from '../../models';

const mockGamePieces: BoardInfo = {
  A1: {isOpen: true, player: 'P1'},
  A2: {isOpen: true, player: null},
  A3: {isOpen: true, player: 'P1'},
  B1: {isOpen: true, player: null},
  B2: {isOpen: true, player: null},
  B3: {isOpen: true, player: null},
  C1: {isOpen: true, player: null},
  C2: {isOpen: true, player: null},
  C3: {isOpen: true, player: null},
};

const mockSecondGamePieces: BoardInfo = {
  D1: {isOpen: true, player: 'P1'},
  D2: {isOpen: true, player: 'P1'},
  D3: {isOpen: true, player: null},
  E1: {isOpen: true, player: 'P2'},
  E2: {isOpen: true, player: null},
  E3: {isOpen: true, player: null},
  F1: {isOpen: true, player: 'P2'},
  F2: {isOpen: true, player: null},
  F3: {isOpen: true, player: null},
};

const mockThirdGamePieces: BoardInfo = {
  G1: {isOpen: true, player: 'P1'},
  G2: {isOpen: true, player: 'P1'},
  G3: {isOpen: true, player: null},
  H1: {isOpen: true, player: 'P2'},
  H2: {isOpen: true, player: null},
  H3: {isOpen: true, player: null},
  I1: {isOpen: true, player: 'P2'},
  I2: {isOpen: true, player: null},
  I3: {isOpen: true, player: null},
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


describe('Boardspot', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Initial single board renders correctly and player is not null', () => {
    render(
      <BoardContext.Provider value={initBoardContextValues}>
        <BoardSpot row='A' index={1} />
      </BoardContext.Provider>
    );

    const availableMoveElement = screen.getByTestId('board-spot-A1')
    expect(availableMoveElement).toBeVisible()
  })

  it('Second board renders correctly and player is not null', () => {
    render(
      <BoardContext.Provider value={{
        ...initBoardContextValues,
        secondGamePieces: mockSecondGamePieces
      }}>
        <BoardSpot row='E' index={1} />
      </BoardContext.Provider>
    );

    const availableMoveElement = screen.getByTestId('board-spot-E1')
    expect(availableMoveElement).toBeVisible()
  })

  it('Third board renders correctly and player is not null', () => {
    render(
      <BoardContext.Provider value={{
        ...initBoardContextValues,
        secondGamePieces: mockSecondGamePieces,
        thirdGamePieces: mockThirdGamePieces
      }}>
        <BoardSpot row='H' index={1} />
      </BoardContext.Provider>
    );

    const availableMoveElement = screen.getByTestId('board-spot-H1')
    expect(availableMoveElement).toBeVisible()
  })
})