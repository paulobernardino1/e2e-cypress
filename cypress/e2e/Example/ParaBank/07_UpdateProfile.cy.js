/// <reference types= 'cypress' />

describe('Update Contract Info', () => {
    it("Update Profile", () => {
        cy.login()

        // update profile
        cy.get("a[href='/parabank/updateprofile.htm']").click()

        // information update
        cy.get('[name*="customer.firstName"]').type('trial')
        cy.get('[name*="customer.lastName"]').type('lastname')
        cy.get('[name*="customer.address.street"]').type('adress')
        cy.get('[name*="customer.address.city"]').type('city')
        cy.get('[name*="customer.address.state"]').type('state')
        cy.get('[name*="customer.address.zipCode"]').type('2222222')
        cy.get('[name*="customer.phoneNumber"]').type('+905555555555')
        cy.get('[name*="customer.ssn"]').type('22222222222')

        // update button click
        cy.get('[value="Update Profile"]').click()
        cy.contains('Your updated address and phone number have been added to the system')
    })
})