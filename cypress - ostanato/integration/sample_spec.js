describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()
      
      cy.url().should('include', '/commands/actions')
      
      cy.get('.action-email', { timeout: 10000 })
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

      cy.get('.action-email').clear().type('Hello, World')

      cy.get('.action-focus').focus()

      cy.get('input').should('not.have.value', 'US')

      cy.get('form').should('not.have.class')

      cy.get('input').should('have.value', 'Hello, World')

      cy.get('select.action-select').select('apples').should('have.value', 'fr-apples')
  


     
      
    })

   

  })