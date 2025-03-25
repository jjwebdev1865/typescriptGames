describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Loads correctly', () => {
    cy.get('h1').contains('Tic Tac Toe')
  })

  it('Clicking a available move moves the piece then hides the button. Player turn also changes', () => {

    // Shows buttons exist until its clicked then disappear
    const originalMoveButton = cy.contains('button', 'A1')
    originalMoveButton.should('exist')
    originalMoveButton.click()
    originalMoveButton.should('not.exist')

    const getPlayerTurn = cy.get('h2').contains('Player Turn: P2')
    getPlayerTurn.should('exist')
  })

  it('Player gets 3 tiles in a row and wins', () => {
    // Shows buttons exist until its clicked then disappear
    cy.contains('button', 'A1').click()
    cy.contains('button', 'C1').click()
    cy.contains('button', 'A2').click()
    cy.contains('button', 'B1').click()
    cy.contains('button', 'A3').click()

    const gameOneWinner = cy.get('h4').contains('1st Game: Won by P1')
    gameOneWinner.should('exist')
    const availableMovesGameCount = cy.get('h3').contains('Available Moves for Game: 2')
    availableMovesGameCount.should('exist')
  })
})