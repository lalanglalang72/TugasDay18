describe('Login Berhasil Test', () => {
  it('should login successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();
    
  });
});
