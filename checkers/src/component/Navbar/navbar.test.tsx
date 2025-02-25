
// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './navbar';
import '@testing-library/jest-dom';

// Setup using: https://maous.medium.com/setup-testing-environment-for-react-typescript-with-jest-1f5eb453aa2
describe('Navbar componeont', () => {
  beforeEach(() => {
      jest.clearAllMocks()
  });

  it('Renders H1 correctly', async () => {
    render(
      <Navbar playerTurn='p1' />
    );

    const headingElement = screen.getByRole('heading', { name: 'Checkers', level: 1 });
    expect(headingElement).toBeVisible();
    expect(headingElement).toHaveTextContent('Checkers');
  });

  it('Renders H2 correctly', async () => {
    render(
      <Navbar playerTurn='p1' />
    );

    const headingElement = screen.getByRole('heading', { name: 'Player turn: P1', level: 2 });
    expect(headingElement).toBeVisible();
    expect(headingElement).toHaveTextContent('Player turn: P1');
  });

  it('Renders placeholder correctly', async () => {
    render(
      <Navbar playerTurn='p1' />
    );

    const textElement = screen.getByText('account placeholder');
    expect(textElement).toBeVisible();
  });

  describe("Navbar Buttons", () => {
    it('Renders game option buttons correctly', async () => {
      render(
        <Navbar playerTurn='p1' />
      );
  
      const buttonElement1 = screen.getByRole('button', { name: /1 Player/i });
      const buttonElement2 = screen.getByRole('button', { name: /2 Player/i });
  
      expect(buttonElement1).toBeVisible();
      expect(buttonElement2).toBeVisible();
    });

    it('Clicking 1 player changes the game type', () => {
      const setGameTypeMock = jest.fn();
      const { rerender } = render(
        <Navbar playerTurn='p1' gameType={2} setGameType={setGameTypeMock}/>
      );
      const textElement = screen.getByText('Game Type: 2 MANUAL PLAYERS');
      expect(textElement).toBeVisible();

      const buttonElement2 = screen.getByRole('button', { name: "1 Player" });
      fireEvent.click(buttonElement2);
      rerender(<Navbar playerTurn='p1' gameType={1} setGameType={setGameTypeMock}/>)

      const textElement = screen.getByText('Game Type: 1 PLAYER AGAINST AI');
      expect(textElement).toBeVisible();
    })

    it('Clicking 2 player changes the game type', () => {
      const setGameTypeMock = jest.fn();
      const { rerender } = render(
        <Navbar playerTurn='p1' gameType={1} setGameType={setGameTypeMock}/>
      );
      const textElement = screen.getByText('Game Type: 1 PLAYER AGAINST AI');
      expect(textElement).toBeVisible();

      const buttonElement2 = screen.getByRole('button', { name: "2 Player" });
      fireEvent.click(buttonElement2);
      rerender(<Navbar playerTurn='p1' gameType={2} setGameType={setGameTypeMock}/>)

      const textElement = screen.getByText('Game Type: 2 MANUAL PLAYERS');
      expect(textElement).toBeVisible();
    })
  })

})