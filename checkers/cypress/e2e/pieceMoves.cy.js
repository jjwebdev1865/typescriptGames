describe('Player moves', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('player one piece moves', () => {
    const originalMoveButton = cy.contains('button', 'F3')
    originalMoveButton.should('exist')
    originalMoveButton.click()

    const firstMove = cy.get('[data-testid="checkers-piece-move-E2"]')
    firstMove.should('exist')
    firstMove.contains('button', 'E2').click()

    originalMoveButton.should('not.exist');
    cy.get('h2').contains('Player turn: P2')
  })

  it('player two piece move', () => {
    cy.contains('button', 'F3').click()
    cy.get('[data-testid="checkers-piece-move-E2"]').contains('button', 'E2').click()

    const player2piece = cy.contains('button', 'C4')
    player2piece.should('exist')
    player2piece.click()

    const firstMove = cy.get('[data-testid="checkers-piece-move-D3"]')
    firstMove.should('exist')
    firstMove.contains('button', 'D3').click()
    cy.get('h2').contains('Player turn: P1')
  })

  it('player one attack lowers player two piece count', () => {
    cy.contains('button', 'F3').click()
    cy.get('[data-testid="checkers-piece-move-E2"]').contains('button', 'E2').click()

    cy.contains('button', 'C4').click()
    cy.get('[data-testid="checkers-piece-move-D3"]').contains('button', 'D3').click()

    const player1Attack = cy.contains('button', 'E2')
    player1Attack.should('exist')
    player1Attack.click()

    const firstAttack = cy.get('[data-testid="checkers-piece-move-C4"]')
    firstAttack.should('exist')
    firstAttack.contains('button', 'C4').click()
    cy.get('h2').contains('Player turn: P1')
    cy.contains('Player Two: 11')
    // NOTE: an attack follow up can be a double jump. This is not available here so both available moves here should be disabled. 
    // The turn remains P1 until end turn is clicked
    const disabledFollowUpAttack1 = cy.get('[data-testid="checkers-piece-move-A2"]').contains('button', 'A2')
    disabledFollowUpAttack1.should('exist').should('be.disabled')

    cy.contains('button', 'End Turn').click()
    cy.get('h2').contains('Player turn: P2')
  })

  it('players can do a double jump if spacing is correct', () => {
    cy.contains('button', 'F3').click()
    cy.get('[data-testid="checkers-piece-move-E2"]').contains('button', 'E2').click()

    cy.contains('button', 'C4').click()
    cy.get('[data-testid="checkers-piece-move-D3"]').contains('button', 'D3').click()

    cy.contains('button', 'E2').click()
    cy.get('[data-testid="checkers-piece-move-C4"]').contains('button', 'C4').click()
    // Note: No double jump available here
    cy.contains('button', 'End Turn').click()

    cy.contains('button', 'C6').click()
    cy.get('[data-testid="checkers-piece-move-D7"]').contains('button', 'D7').click()

    cy.contains('button', 'F1').click()
    cy.get('[data-testid="checkers-piece-move-E2"]').contains('button', 'E2').click()

    // NOTE: Double Jump available here
    const doubleJumpAttack = cy.contains('button', 'B5')
    doubleJumpAttack.should('exist')
    doubleJumpAttack.click()
    cy.get('[data-testid="checkers-piece-move-D3"]').contains('button', 'D3').click()

    // NOTE: after attack, player should have one option disabled (its a move) and one move enabled (a double jump)
    const disabledFollowUpAttack1 = cy.get('[data-testid="checkers-piece-move-E4"]').contains('button', 'E4')
    disabledFollowUpAttack1.should('exist').should('be.disabled')
    const enabledFollowUpAttack1 = cy.get('[data-testid="checkers-piece-move-F1"]').contains('button', 'F1')
    enabledFollowUpAttack1.should('exist').should('not.be.disabled')
    enabledFollowUpAttack1.click()

    cy.contains('button', 'End Turn').click()
    cy.get('h2').contains('Player turn: P1')
  })

  // TODO: complete test later: king unit
  // TODO: complete test later: confirm pieces cant jump own teammates
  // TODO: complete test later: winner of a game
})