const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //     baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    // env: {
    //   username: "Admin",
    //   password: "admin123"
    //      }
        

  env: 
  {
    "baseUrl": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",  
    "username": "Admin",
    "password": "admin123"
  }
  


},
});











