/// <reference types= 'cypress' />

describe('Read More', () => {
    it('query in text', () => {
        cy.visit('https://parabank.parasoft.com/')

        // click read more
        cy.get('.more a[href*="news.htm"]').click({ multiple: true })

        cy.scrollTo(0, 500)
        
        // query for title in text
        cy.contains('ParaBank Is Offline')
    })
})