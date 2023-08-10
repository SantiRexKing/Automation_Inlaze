describe('Registrase', () => {

    let userdata;
      
    before(() => {
      cy.fixture('usuarios').then((data) => {
        userdata = data;
      });
    });
  
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
      cy.visit('/');
    });
  
    it('proceso de registrarse completo', () => {
      cy.get('.enlace').click();

      cy.get('#name').type(userdata.name + ' ' + userdata.lastname);
      cy.get('#email').type(userdata.email);
      cy.get('#pwd').type(userdata.invalid_pass);
      cy.get('#pwdRepeat').type(userdata.passRepeat);
    
      cy.get('.btn-block').click();

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('Las contraseñas no coinciden.');
        return false;
    });
    });
  });