describe('Checkers Initial Setup', () => {
  it('Loads correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Checkers')
  })

  it('The header is set up correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Checkers')
    cy.get('h2').contains('Player turn: P1')
    cy.contains('button', '1 Player')
    cy.contains('button', '2 Player')
    cy.contains('Game Type: 2 MANUAL PLAYERS')
    cy.contains('account placeholder')
  })

  it('The player options area is set up correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h3').contains('Available Moves for')

    cy.get('h3').contains('Piece count')
    cy.contains('Player One: 12')
    cy.contains('Player Two: 12')
  })
})