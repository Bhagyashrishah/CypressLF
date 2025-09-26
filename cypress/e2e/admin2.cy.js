describe('Admin User Management Flow', () => {
  // 🔹 Define all selectors in one place for reusability
  const selectors = {
    adminModuleLink: '[href="/web/index.php/admin/viewAdminModule"]',
    addUserBtn: '.oxd-button.oxd-button--medium.oxd-button--secondary',
    dropdownField: '.oxd-select-text.oxd-select-text--active',
    dropdownOption: '.oxd-select-dropdown .oxd-select-option',
    employeeNameField: '[placeholder="Type for hints..."]',
    usernameField: '.oxd-input.oxd-input--active',
    passwordField: '[type="password"]',
    submitBtn: '[type="submit"]',
  };

  const testData = {
    role: 'Admin',
    status: 'Enabled',
    employeeName: 'Abhishek Sanjay Shinde',
    username: 'bhagya',
    password: 'Bhagya@66',
  };
    const logoutselectors = {
            userMenu: '.oxd-userdropdown-tab', // top-right corner >> user dropdown
            logoutBtn: '.oxd-userdropdown-link', // dropdown >> Logout
    }; 


  beforeEach(() => {
    cy.login();
    cy.intercept('GET', '/api/v2/dashboard/employees/subunit').as('getUsers');
  });

  it('Should add a new user successfully', () => {
    // Navigate to Admin → User Management
    cy.get(selectors.adminModuleLink).click();
    cy.wait('@getUsers').its('response.statusCode').should('eq', 200);

    // Click Add User button
    cy.get(selectors.addUserBtn).click();

    // Select User Role
    cy.get(selectors.dropdownField).eq(0).click();
    cy.get(selectors.dropdownOption).contains(testData.role).click();
    cy.get(selectors.dropdownField).eq(0).should('contain.text', testData.role);

    // Enter Employee Name
    cy.get(selectors.employeeNameField).type(testData.employeeName);

    // Select Status
    cy.get(selectors.dropdownField).eq(1).click();
    cy.contains(selectors.dropdownOption, testData.status).click();
    cy.get(selectors.dropdownField).eq(1).should('contain.text', testData.status);

    // Enter Username
    cy.get(selectors.usernameField).eq(1).type(testData.username);

    // Enter Password & Confirm
    cy.get(selectors.passwordField).eq(0).type(testData.password);
    cy.get(selectors.passwordField).eq(1).type(testData.password);

    // Submit form
    cy.get(selectors.submitBtn).click();

//       afterEach(() => {
//     cy.logout(); // custom command (logout flow)
//   });

  });
      afterEach(() => {
    cy.get(logoutselectors.userMenu).click(); // user menu open
    cy.contains(logoutselectors.logoutBtn, 'Logout').click(); // logout option
    cy.url().should('include', '/auth/login'); // confirm login page
  });

});
