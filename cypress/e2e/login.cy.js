// //describe('Custom Command Login Test', () => {
//   it('should login with valid credentials', () => {
//     cy.login('webdriver', 'webdriver123')
//     //cy.login('bhagya','bhagya66')
    
//     // Assertion alert handle
//     cy.on('window:alert', (str) => {
//       expect(str).to.equal('validation succeeded')
//     })
//   })

//   it('should fail login with invalid credentials', () => {
//     cy.login('wronguser', 'wrongpass')

//     cy.on('window:alert', (str) => {
//       expect(str).to.equal('validation failed')
//     })
//   })
describe('Login using Env Variables', () => {
  it('Should login successfully and validate alert message', () => {
    // 🔹 Login command (username, password env variables मधून घेईल)
    cy.login();

    // 🔹 Alert message verify 
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('validation succeeded');
    });

    // 🔹 Optional: Login नंतर logo दिसतोय का तेही check
    cy.get('.oxd-brand-banner img', { timeout: 10000 })
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});


// describe('Login using Env Variables', () => {
//   it('should login successfully', () => {
//     cy.login()

//     cy.on('window:alert', (str) => {
//       expect(str).to.equal('validation succeeded')
//     })
//   })
// })

