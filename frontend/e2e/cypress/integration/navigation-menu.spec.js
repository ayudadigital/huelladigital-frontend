import { ROUTE } from '../../../src/utils/routes';


describe('Navigation menu', () => {

  beforeEach(() => {
    cy.visit(ROUTE.home);
  });

  it('verify navigation on Dashboard', () => {

    cy.contains('Acceder').should('contain', 'Acceder').click({ force: true });
    cy.url().should('include', ROUTE.loginRegister);

    cy.contains('Inicio').should('contain', 'Inicio').click({ force: true });
    cy.url().should('include', ROUTE.home);

    cy.contains('Registrarse').should('contain', 'Registrarse').click();
    cy.url().should('include', ROUTE.loginRegister);


  });

  it.only('verify render of menu mobil', () => {

    cy.viewport(320, 480);

    cy.get('a.LinkText')
      .should('be', false);



    // the navbar should have collapse since our screen is smaller


    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999);

    // the change otherwise it is a little too fast to see :)

    cy.viewport('macbook-13');
    cy.wait(200);

    cy.viewport('ipad-2');
    cy.wait(200);
    cy.viewport('ipad-mini');
    cy.wait(200);
    cy.viewport('iphone-6+');

    cy.wait(200);
    cy.viewport('iphone-3');
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait');
    cy.wait(200);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);
  });

});
