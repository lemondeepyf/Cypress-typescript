export class CheckoutPage1{
    link_checkout1 = 'Checkout: Your Information'
    
    assertCheckoutPage1(){
        cy.contains(this.link_checkout1).click()
        cy.contains('Checkout: Your Information').should('be.visible') 
    }
    fillFormCheckout(firstName : string, lastName : string , postalCode : string){
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)
    }

    continueBtn(){
        cy.get('[data-test="continue"]').click()
    }

    errorMsg(){
        cy.contains('Error: Postal Code is required').should('be.visible')
    }
}