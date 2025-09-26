
describe('Admin User Management Flow', () => {
    const username ='["class="oxd-select-text oxd-select-text--active"]'

    // Run login before each test
    beforeEach(() => {
        cy.login();
    });

    it('Should load the User Management page', () => {
        cy.intercept('GET', '/api/v2/dashboard/employees/subunit').as('getUsers');
        cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
        cy.wait('@getUsers').its('response.statusCode').should('eq', 200);
 // To add new user 
cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
// new user window
cy.get(username).eq(0).click();
cy.get('.oxd-select-dropdown .oxd-select-option').contains('Admin').click();
cy.get('.oxd-select-text.oxd-select-text--active').eq(0).should('contain.text', 'Admin');
cy.get('[placeholder="Type for hints..."]').type('Abhishek sanjay Shinde')
cy.get(username).eq(1).click();
cy.contains('.oxd-select-option', 'Enabled').click();
cy.get('[class="oxd-select-text oxd-select-text--active"]').eq(1).should('contain.text', 'Enabled');
cy.get('[class="oxd-input oxd-input--active"]').eq(1).type('bhagya');
cy.get('[type="password"]').eq(0).type('Bhagya@66');
cy.get('[type="password"]').eq(1).type('Bhagya@66');
cy.get('[type="submit"]').click();

// // Navigate to Admin Module
// cy.get('[href="/web/index.php/admin/viewAdminModule"]').click();

// // Add new user button
// cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary').click();

// // Select User Role = Admin
// cy.get('.oxd-select-text.oxd-select-text--active').eq(0).click();
// cy.get('.oxd-select-dropdown .oxd-select-option').contains('Admin').click();
// cy.get('.oxd-select-text.oxd-select-text--active').eq(0).should('contain.text', 'Admin');

// // Employee Name
// cy.get('[placeholder="Type for hints..."]').type('Thomas Kutty Benny');

// // Select Status = Enabled
// cy.get('.oxd-select-text.oxd-select-text--active').eq(1).click();
// cy.contains('.oxd-select-option', 'Enabled').click();
// cy.get('.oxd-select-text.oxd-select-text--active').eq(1).should('contain.text', 'Enabled');

// // Username
// cy.get('.oxd-input.oxd-input--active').eq(1).type('bhagya');

// // Password & Confirm Password
// cy.get('[type="password"]').eq(0).type('Bhagya@66');
// cy.get('[type="password"]').eq(1).type('Bhagya@66');

// // Save button
// cy.get('[type="submit"]').click();






//User management page

//         cy.get('.oxd-input.oxd-input--active').eq(1).type('bhagya');
// //      cy.get('.oxd-select-text.oxd-select-text--active').eq(0).click().select("Admin").click();

// //  Click on first dropdown
// cy.get('.oxd-select-text.oxd-select-text--active').eq(0).click();

// // Select option by visible text
// cy.contains('.oxd-select-option', 'Admin').click();

// //  : Verify selected value
// cy.get('.oxd-select-text.oxd-select-text--active').eq(0)
//   .should('contain.text', 'Admin');

//   cy.get('[placeholder="Type for hints..."]').type('rahul das')
// cy.get('.oxd-select-text.oxd-select-text--active').eq(1).click();
// cy.contains('.oxd-select-option', 'Enabled').click();
// cy.get('.oxd-select-text.oxd-select-text--active').eq(1).should('contain.text', 'Enabled');
// cy.get('[type="submit"]').click();
    //     // Verify new user added in table
    //     cy.get('table').contains('td', 'bhagya').should('exist');







//..........................................................................................................


       // Wait for API response
    //     cy.wait('@getUsers');

    //     // Assertion
    //     cy.get('h1').should('contain.text', 'User Management');
    // });

    // it('Should add a new user', () => {
    //     cy.intercept('POST', '/api/users').as('createUser');

    //     cy.visit(Cypress.env('baseUrl') + '/admin/users');

    //     cy.get('button').contains('Add User').click();
    //     cy.get('input[name="name"]').type('Test User');
    //     cy.get('select[name="role"]').select('Admin');
    //     cy.get('button[type="submit"]').click();

    //     cy.wait('@createUser').its('response.statusCode').should('eq', 201);

    //     // Verify new user added in table
    //     cy.get('table').contains('td', 'Test User').should('exist');
     });

});
