describe('Login Gagal dengan Pass Salah Test', () => {
    it('should login failed with wrong password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('abcd')
      cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
  })