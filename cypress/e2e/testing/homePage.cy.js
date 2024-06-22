

describe('Navegate home page', function() {
    beforeEach(() => {
        cy.visit('')
        cy.LoginSuccess('standard_user', 'secret_sauce')
    })
    it('Add a bakpack in the car', function(){
        cy.HomeTitle();
        cy.Add_backpack();
        cy.carLink();
        cy.quantity();
        cy.checkoutBtn();
        cy.checkoutInformation('test', 'test', '12321')
        cy.continue();
    })
})