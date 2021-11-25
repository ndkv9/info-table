/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('History Table App', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('implements the first load', function () {
    cy.contains('Loading..')
  })

  it('loads the frontpage with two separate tables', function () {
    cy.get('h4').contains('Users History')
    cy.get('h4').contains('Projects History')
  })

  it('displays with three rows as default', function () {
    cy.get('[data-cy=info-table]:first').within(function () {
      cy.get('[data-cy=table-rows]').should('have.length', 3)
    })
  })
})
