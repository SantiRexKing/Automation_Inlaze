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

      
    
      cy.get('.btn-block').click();

      cy.get(':nth-child(1) > .invalid-feedback').should('include.text', 'Por Favor Digite Su Nombre!');
      cy.get(':nth-child(2) > .invalid-feedback').should('include.text', 'Por Favor Digite Su Email!');
      cy.get(':nth-child(3) > .invalid-feedback').should('include.text', 'Por Favor Digite Su Contraseña!');
      cy.get(':nth-child(4) > .invalid-feedback').should('include.text', 'Por Favor Digite Su Contraseña!');

     
    
    });
  });