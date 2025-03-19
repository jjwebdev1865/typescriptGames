import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvailableMove } from './AvailableMove';

const handleMoveMock = jest.fn()

describe('Available Move', () => {
  beforeEach(() => {
    render(
      <AvailableMove move='A1' handleMove={handleMoveMock} />
    );

    jest.clearAllMocks()
  })

  it('Renders a AvailableMove component correctly', () => {
    const availableMoveElement = screen.getByTestId('available-move-A1')
    const buttonElement = screen.getByRole('button', { name: 'A1' });

    expect(buttonElement).toBeVisible();
    expect(availableMoveElement).toBeVisible()
  })

  it('button can be clicked', () => {
    const buttonElement = screen.getByRole('button', { name: 'A1' });
    expect(buttonElement).toBeVisible();

    fireEvent.click(buttonElement);
    expect(handleMoveMock).toHaveBeenCalledTimes(1);
  })
})
