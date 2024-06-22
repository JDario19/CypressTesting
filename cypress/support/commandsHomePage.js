// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('HomeTitle',() => {
    cy.get('.app_logo').should('have.text', 'Swag Labs');
})

Cypress.Commands.add('Add_backpack', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
})

Cypress.Commands.add('carLink', () =>{
    cy.get('[data-test="shopping-cart-link"]').click();
})

Cypress.Commands.add('quantity', () =>{
    cy.get('[data-test="item-quantity"]').should('have.text','1');
})

Cypress.Commands.add('checkoutBtn', () =>{
    cy.get('[data-test="checkout"]').click();
})

Cypress.Commands.add('checkoutInformation', (name, lastName, zipCode) =>{
    cy.get('[data-test="firstName"]').type(name);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(zipCode);
})

Cypress.Commands.add('continue', () =>{
    cy.get('[data-test="continue"]').click();
})
