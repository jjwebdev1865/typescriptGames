
// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CheckersPieceMove } from './checkersPieceMove';
import { PieceMove } from '../../types';

describe('Checkers Piece Move', () => {
  const move: PieceMove = {
    piece: 'E4',
    disabled: false,
    isKing: false,
    type: 'move'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders CheckersPieceMove correctly', async () => {
    render(
      <CheckersPieceMove updatedMove={move} onClickMovePiece={jest.fn()}/>
    );

    const availableMoveElement = screen.getByTestId('checkers-piece-move-E4')
    expect(availableMoveElement).toBeVisible();
  });

  it ('Renders a button that reads E4', () => {
    render(
      <CheckersPieceMove updatedMove={move} onClickMovePiece={jest.fn()}/>
    );

    const buttonElement = screen.getByRole('button', { name: 'E4' });
    expect(buttonElement).toBeVisible();
  })

  it ('Button is clickable', () => {
    const handleClick = jest.fn()
    render(
      <CheckersPieceMove updatedMove={move} onClickMovePiece={handleClick}/>
    );

    const buttonElement = screen.getByRole('button', { name: 'E4' });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  it('Button is disabled', () => {
    const disabledPiece: PieceMove = {
      ...move,
      piece: 'C2',
      disabled: true
    }
    render(
      <CheckersPieceMove updatedMove={disabledPiece} onClickMovePiece={jest.fn()}/>
    );

    const buttonElement = screen.getByRole('button', { name: 'C2' });
    expect(buttonElement).toBeDisabled();
  })
})
