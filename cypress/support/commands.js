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
// Cypress.Commands.add('login', () => {
//   const username = Cypress.env('username')
//   const password = Cypress.env('password')

// //Cypress.Commands.add('login', (username, password) => {
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//   cy.get('[name="username"]').type(username)      // Username input
//   cy.get('[name="password"]').type(password)  // Password input
//   cy.get('[type="submit"]').click()     // Login button
// })


// Custom command for login
Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env('baseUrl')); // Login page URL

    cy.get('input[name="username"]').type(Cypress.env('username')); // Username from env
    cy.get('input[name="password"]').type(Cypress.env('password')); // Password from env
    cy.get('button[type="submit"]').click();

    // Wait for dashboard/homepage to load
    cy.url().should('include', '/dashboard');
});



// Custom login command
// Cypress.Commands.add('login', () => {
//   cy.visit(Cypress.config('baseUrl') + '/login'); // Example login path

//   cy.get('input[name="username"]').type(Cypress.env('username'));
//   cy.get('input[name="password"]').type(Cypress.env('password'));
//   cy.get('button[type="submit"]').click();

//   // Verify successful login
//   cy.url().should('include', '/dashboard'); // replace with actual dashboard URL
// });


