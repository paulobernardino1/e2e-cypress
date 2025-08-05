/// <reference types = 'cypress' />

describe('Customer Care', () => {
    it('Email support', () => {
        cy.login()

        cy.get("a[href='contact.htm']").click({ multiple: true })

        // email support by filling out the form
        cy.get("[name='name']").type('trial')
        cy.get("[name='email']").type('trial@yopmail.com')
        cy.get("[name='phone']").type('+905555555555')
        cy.get("[name='message']").type('test email support message')
        cy.get("#contactForm [class='button']").click()

        // verify that the message was sent
        cy.contains('A Customer Care Representative will be contacting you')
    })
})