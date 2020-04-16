describe('The Home Page', function() {

  beforeEach(function () {
    
  })
    it('successfully loads', function() {


      // cy.server()           // enable response stubbing
      // cy.route({
      //   method: 'GET',      // Route all GET requests
      //   url: 'http://localhost:4200/app/getHeroes',    // that have a URL that matches '/users/*'
      //   response: []        // and force the response to be: []
      // })
        
      cy.visit('/') // njchange URL to match your dev URL

      cy.contains('Dashboard').should('have.css', 'color')   // yields 'sans-serif'
        .and('eq', 'rgb(255, 0, 0)') 
        cy.get('.ss').contains('ccc').click()
        // const id = 12;
        // cy.request('DELETE', `/api/heroes/${id}`)
        // cy.request('GET', 'http://localhost:4200/app/getHeroes')
    })

   
    
    
  })