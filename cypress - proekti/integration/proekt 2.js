

 


  context('My second Test', function() {
    
    it('Visits the Kitchen Sink', function() {
            
    cy.visit('/') 
       
  

    cy.get('#modal').should('not.exist')

   
    
    cy.get('a.ss')
      .as('jas')

      cy
      .get('@jas')
      .click()

      cy.visit('/heroes') 
     
   // mora prvo na drugata strana da otide ,pod ova podrzbirame pikrivanje na elemnti
      cy
      .get('.asdf')
      .click({ force: true })

     
     // cy.debug().click() 

      cy.get('.dod')
      .type ('dodadenoooo',{ force: true })

      cy.get('.stisni') 
        .dblclick()                  
       
      cy.url()                   
        .should('include', 'http://localhost:4200/heroes') // .debug().click() 


        cy.get('a.ss', { timeout: 10000 })
        .should('have.class', 'ss')
        .and('have.attr', 'href', '#aa')
        .and('be.visible')
        .and('contain', 'ccc')
       // cy.get('.nasheKopce') .should('have.css', 'background-color') 
        //.and('eq', 'rgb(0,128, 0)')

       
   
        cy.get('a.ss').should(($ccc) => {
          expect($ccc).to.have.class('ss')
          expect($ccc).to.have.attr('href', '#aa')
          
        })

        
        cy.get('div.ggg').should(($ccc) => {
          expect($ccc).to.have.length(2)
        })


const obj = {}
setTimeout(() => {
  obj.foo = 'bar'
}, 1000)

cy.wrap(obj).its('foo')




cy.get('button').contains('hide').should('have.class', 'close')

        cy.get('button.close').click().should('not.have.class')

//  cy.get('.nasheKopce').then(($btn) => {
//         $btn.trigger('mouseover')
//       }).should('have.css', 'background-color')   // yields 'sans-serif'
//       .and('eq', 'rgb(255, 0, 0)')


      })
})