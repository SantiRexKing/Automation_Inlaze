describe('Login', () => {
 
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
  
    it('escribe la info en el login y dar click en submit', () => {
      cy.get('#ingresoUsuario').type(userdata.invalid_name);
      cy.get('#ingresoContrasena').type(userdata.contrasena);
  
      cy.get('.btn-block').click();

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('Usuario no existe!');
        return false;
        });
    });
  });