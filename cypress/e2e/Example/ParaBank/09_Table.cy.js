/// <reference types= 'cypress' />

describe('Row count', () => {
    it('finds the number of rows in the table', () => {
        cy.visit('https://parabank.parasoft.com/')

        //click read more
        cy.get('.more [href*="services.htm"]').click()

        cy.get("div#rightPanel > table:nth-of-type(1)")
        .find("tr")
        .then((row) => {

          //row.length will give you the row count
          cy.log(row.length)
        
          // now let's get the number of rows in the table
          cy.get('table tr').should('have.length', 43)
        })
    })
})