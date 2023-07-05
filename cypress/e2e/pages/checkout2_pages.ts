export class CheckoutPage2{
    link_checkout2 = 'Checkout: Overview'

    assertCheckoutPage2(){
        cy.contains(this.link_checkout2).click()
        cy.contains('Checkout: Overview').should('be.visible') 
    }

    btnFinish(){
        cy.get('[data-test="finish"]').click()
    }

    

}