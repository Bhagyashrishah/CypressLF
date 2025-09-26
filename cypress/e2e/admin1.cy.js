beforeEach(() => {
  cy.login(); // custom command
});

it('Should add a new user successfully', () => {
  // Intercept API call
  cy.intercept('POST', '/web/index.php/api/v2/admin/users').as('createUser');

  // Navigate to Admin Module
  cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();

  // Add new user
  cy.contains('Add').click();

  // Select User Role
  cy.get('.oxd-select-text').eq(0).click();
  cy.contains('.oxd-select-option', 'Admin').click();

  // Employee Name autocomplete
// Intercept API
cy.intercept('Post', '**/web/index.php/admin/saveSystemUser').as('getEmployees');

// Type employee name
cy.get('[placeholder="Type for hints..."]').type('Bheem Brown');

// Wait for API to respond
cy.wait('@getEmployees');

// Now select from autocomplete
cy.get('.oxd-autocomplete-option')
  .should('contain.text', 'Bheem Brown')
  .click();

  // Status
  cy.get('.oxd-select-text').eq(1).click();
  cy.contains('.oxd-select-option', 'Enabled').click();

  // Username
  cy.get('.oxd-input').eq(1).type('bhagya123');

  // Passwords
  cy.get('[type="password"]').eq(0).type('Bhagya@66');
  cy.get('[type="password"]').eq(1).type('Bhagya@66');

  // Save
  cy.get('[type="submit"]').click();

  // Wait for API & Assert response
  cy.wait('@createUser').its('response.statusCode').should('eq', 200);
});
