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
      cy.get('#ingresoUsuario').type(userdata.usuario);
      cy.get('#ingresoContrasena').type(userdata.contrasena);
  
      cy.get('.btn-block').click();
      cy.get('.title').should('include.text', 'Bienvenido');
      
    });
  });
  