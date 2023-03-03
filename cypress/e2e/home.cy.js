describe('home', () => {
  it('webapp dever estar online', () => {
    cy.visit('/')

    cy.title().should('eq','Gerencie suas tarefas com Mark L')
  })
})