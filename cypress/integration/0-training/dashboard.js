context('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show my test account', () => {
    cy.get('.account-widget-account__name')
      .should('have.text', 'test 1')
    cy.get('.account-widget-account__balance')
      .should('have.text', '100.00 EUR')
  })
})
