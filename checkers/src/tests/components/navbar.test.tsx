
// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../../component/Navbar/navbar';
import '@testing-library/jest-dom';

// Setup using: https://maous.medium.com/setup-testing-environment-for-react-typescript-with-jest-1f5eb453aa2
describe('Navbar componeont', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });

    it('Renders Navbar component correctly', async () => {
        render(
          <Navbar playerTurn='p1' />
        );

        const headingElement = screen.getByRole('heading', { name: 'Checkers', level: 1 });
        expect(headingElement).toBeVisible();
        expect(headingElement).toHaveTextContent('Checkers');
      });
})