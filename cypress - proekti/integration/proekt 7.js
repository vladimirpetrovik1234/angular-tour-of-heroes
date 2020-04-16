it('adds two items', function () {
    cy.visit('/')
  
    cy.get('.new-todo').type('todo A{enter}')
    cy.get('.todo-list li')
      .find('label')
      .should('contain', 'todo A')
  
    cy.get('.new-todo').type('todo B{enter}')
    cy.get('.todo-list li')
      .find('label')
      .should('contain', 'todo B')
  })




  cy.get('.new-todo').type('todo A{enter}')
  cy.get('.todo-list li')         // command
    .should('have.length', 1)     // assertion
    .find('label')                // command
    .should('contain', 'todo A')  // assertion

  cy.get('.new-todo').type('todo B{enter}')
  cy.get('.todo-list li')         // command
    .should('have.length', 2)     // assertion
    .find('label')                // command
    .should('contain', 'todo B')  // assertion



    cy.window()
  .its('app')             // runs once
  .its('model')           // runs once
  .its('todos')           // retried
  .should('have.length', 2)

// ✅ recommended
cy.window()
  .its('app.model.todos') // retried
  .should('have.length', 2)




  cy.get('.todo-list li')     // command
  .should('have.length', 2) // assertion
  .and(($li) => {
    // 2 more assertions
    expect($li.get(0).textContent, 'first item').to.equal('todo a')
    expect($li.get(1).textContent, 'second item').to.equal('todo B')
  })