describe('Home', () => {
  it('Webapp deve estar online', () => {
    cy.visit('/')

    cy.title().should('eq','Gerencie suas tarefas com Mark L') // title = acesso a url
  })
})