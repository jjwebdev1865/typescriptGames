import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RandomMove } from './RandomMove';
import { BoardContext } from '../../context/boardContext';
import { BoardInfo } from '../../models';
import { initBoardContextValues } from '../../utils/mockingUtils';

const mockGamePieces: BoardInfo = {
  A1: {isOpen: true, player: null},
};

const boardContextValues = {
  ...initBoardContextValues,
  gamePieces: mockGamePieces,
}

const mockHandlePieceMove = jest.fn()
const mockHandleMovesChange = jest.fn()

describe('GameBoard', () => {
  beforeEach(() => {
    render(
      <BoardContext.Provider value={boardContextValues}>
        <RandomMove gameCount={1} setAvMoves={jest.fn()} setPieces={jest.fn()} handlePieceMove={mockHandlePieceMove} handleMovesChange={mockHandleMovesChange} />
      </BoardContext.Provider>
    );

    jest.clearAllMocks()
  })

  it('Generates a Random Move Button', () => {
    const button = screen.getByTestId('random-move-btn-game-1')
    expect(button).toBeVisible()
  })

  it('Can click Random Move Button', () => {
    const button = screen.getByTestId('random-move-btn-game-1')
    fireEvent.click(button);
    expect(mockHandlePieceMove).toHaveBeenCalledTimes(1);
    expect(mockHandleMovesChange).toHaveBeenCalledTimes(1);
  })
})
