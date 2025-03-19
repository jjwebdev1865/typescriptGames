import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBoard } from './GameBoard';

const MyComponentMock = <div>Mocked Component</div>;

describe('GameBoard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  it('Renders the GameBoard component', () => {
    render(
      <GameBoard gameWinner='P1' boardGame={MyComponentMock} gameString='2nd'  />
    );

    const gameBoardContainer = screen.getByTestId('1st-board-game-container')
    expect(gameBoardContainer).toBeVisible()
  })
})