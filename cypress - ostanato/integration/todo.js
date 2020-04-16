it('creates 2 items', function () {
  cy.visit('/')                       // command
  cy.focused()                        // command
    .should('have.class', 'new-todo') // assertion
  cy.get('.new-todo')                 // command
    .type('todo A{enter}')            // command
    .type('todo B{enter}')            // command
  cy.get('.todo-list li')             // command
    .should('have.length', 2)         // assertion
})