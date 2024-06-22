describe('Test login', function() {
    beforeEach(() => {
        cy.visit('')
        //cy.LoginSuccess('standard_user', 'secret_sauce')
    })
    it('Verify error messages', function() {
        cy.LoginFail('standard_user1', 'secret_sauce2')
        cy.ErrorMessage();
    })

    it('Login success', function(){
        cy.LoginSuccess('standard_user', 'secret_sauce')
    })
})