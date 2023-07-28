describe('Login Gagal dengan User Salah Test', () => {
    it('should login failed with wrong username', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('abc')
      cy.get('[name="password"]').type('admin123')
      cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })
  })