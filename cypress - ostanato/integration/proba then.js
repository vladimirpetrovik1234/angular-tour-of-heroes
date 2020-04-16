describe('My second Test', function() {
    
    it('Visits the Kitchen Sink', function() {
            
cy.visit('/')  

cy.get('a.aaaa')

.then(($b) => {
  
  const href = $b.prop('href')

})
.then((href) => {
let jas=href
})


.click()
})
})