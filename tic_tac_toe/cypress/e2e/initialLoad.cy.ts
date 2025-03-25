describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
    
  it('Loads correctly headers correctly', () => {
    const mainHeader = cy.get('h1').contains('Tic Tac Toe')
    mainHeader.should('exist')
  })

  it('Loads tiles correctly', () => {
    const initTiles = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
    
    initTiles.forEach((text) => {
      cy.get(`[data-testid="board-spot-${text}"]`).should('exist');
    });
  })

  it('Build player status section', () => {
    const playerTurnHeader = cy.get('h2').contains('Player Turn: P1')
    playerTurnHeader.should('exist')

    const availableMovesHeader = cy.get('h3').contains('Available Moves for Game: 1')
    availableMovesHeader.should('exist')

    const movesButtons = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
    movesButtons.forEach((text) => {
      cy.get(`[data-testid="available-move-${text}"]`).should('exist');
    });
  })
})