import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PieceSpot } from './pieceSpot';
import '@testing-library/jest-dom';
import { PieceInfoFE } from '../../types';
import { MovesProvider } from '../../context/movesContext';
import { GameProvider } from '../../context/gameContext';

// TODO: need to figure out how to mock contexts to complete code coverage
describe('Piece Spot', () => {
  const checkerPiece: PieceInfoFE = {
    key: 'F3',
    piece: 1,
    isKing: false
  }

  const setAvailableMovesMock = jest.fn()
  const setSelectedPieceMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  function renderComponent(piece: PieceInfoFE, index: number) {
    render(
      <GameProvider>
        <MovesProvider>
          <PieceSpot
            checkerPiece={piece} 
            rowIndex={index} 
            setAvailableMoves={setAvailableMovesMock} 
            setSelectedPiece={setSelectedPieceMock} 
          />
        </MovesProvider>
      </GameProvider>
    );
  }

  it('Renders PieceSpot correctly - F3', async () => {
    renderComponent(checkerPiece , 5)

    const spotElement = screen.getByTestId('spot-F3')
    expect(spotElement).toBeVisible();
  });

  it('Renders PieceSpot correctly - even', async () => {
    const newPiece: PieceInfoFE = {
      ...checkerPiece,
      key: 'G4',
    }
    renderComponent(newPiece, 6)

    const spotElement = screen.getByTestId('spot-G4')
    expect(spotElement).toBeVisible();
  });
  
  it('renders a move when button is clicked - regular piece', () => {
    renderComponent(checkerPiece , 5)

    const buttonElement = screen.getByRole('button', { name: "F3" });
    expect(buttonElement).toBeVisible();

    fireEvent.click(buttonElement);
    expect(setAvailableMovesMock).toHaveBeenCalledTimes(1);
    expect(setSelectedPieceMock).toHaveBeenCalledTimes(1);
  })

  it('renders a move when button is clicked - king piece', () => {
    const kingPiece: PieceInfoFE = {
      ...checkerPiece,
      isKing: true,
    }
    renderComponent(kingPiece , 5)

    const buttonElement = screen.getByRole('button', { name: "F3" });
    expect(buttonElement).toBeVisible();

    fireEvent.click(buttonElement);
    expect(setAvailableMovesMock).toHaveBeenCalledTimes(1);
    expect(setSelectedPieceMock).toHaveBeenCalledTimes(1);
  })
})