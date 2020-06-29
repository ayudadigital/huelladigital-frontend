import { ROUTE } from '../../../src/utils/routes';

describe('Volunteer should', () => {
  const VOLUNTEER = {
    email: {
      random: `test${(Math.random() * 1000).toString()}@test.com`,
      duplicate: `email.is.registered@test.com`,
    },

    password: 'aLongPassword',
  };

  before(() => {
    cy.visit('/');
    cy.get('button[aria-label=register-button]').click();
    cy.get('input[name=email]').type(`${VOLUNTEER.email.duplicate}`);
    cy.get('input[name=password]').type(`${VOLUNTEER.password}`);
    cy.get('input[name=repeatedPassword]').type(`${VOLUNTEER.password}`);
    cy.get('button[type=submit]').click();
  });

  it('open the web', () => {
    cy.visit(ROUTE.home);
  });

  it('verify resend to email confirmation page when the form is good way', () => {
    cy.visit(ROUTE.home);
    cy.get('button[aria-label=register-button]').click();
    cy.get('input[name=email]').type(`${VOLUNTEER.email.random}`);
    cy.get('input[name=password]').type(`${VOLUNTEER.password}`);
    cy.get('input[name=repeatedPassword]').type(`${VOLUNTEER.password}`);
    cy.get('button[type=submit]').click();

    cy.url().should('include', ROUTE.email.confirmation);
    cy.get('p').should('contain', 'reenviar correo');
  });

  it('tell user that email are registered', () => {
    cy.visit(ROUTE.home);
    cy.get('button[aria-label=register-button]').click();
    cy.get('input[name=email]').type(`${VOLUNTEER.email.duplicate}`);
    cy.get('input[name=password]').type(`${VOLUNTEER.password}`);
    cy.get('input[name=repeatedPassword]').type(`${VOLUNTEER.password}`);
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/');
    cy.get('p').should('contain', 'Email ya registrado');
  });

  it('registered email should be changed after notified that it already exist', () => {
    cy.visit(ROUTE.home);
    cy.get('button[aria-label=register-button]').click();
    cy.get('input[name=email]').type(`${VOLUNTEER.email.duplicate}`);
    cy.get('input[name=password]').type(`${VOLUNTEER.password}`);
    cy.get('input[name=repeatedPassword]').type(`${VOLUNTEER.password}`);
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/');
    cy.get('p').should('contain', 'Email ya registrado');
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]').type(`test${(Math.random() * 1000).toString()}@test.com`);
    cy.get('button[type=submit]').click();

    cy.url().should('include', ROUTE.email.confirmation);
    cy.get('p').should('contain', 'reenviar correo');
  });
});
