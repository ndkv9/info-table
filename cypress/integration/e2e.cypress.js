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

  describe('On loading state', function () {
    // I will use the second table for testing since it has less data and more convenient to test
    it('displays progress circular and hide the loading button when loading', function () {
      cy.get('[data-cy=info-table]:last').within(function () {
        cy.get('button').contains('Load more').click()
        cy.get('[data-cy=progress-circular]')
        cy.get('button').contains('Load more').should('not.exist')
      })
    })
  })

  describe('On error state', function () {
    it('displays the error message and retry button', function () {
      cy.get('[data-cy=info-table]:last').within(function () {
        cy.get('button').contains('Load more').click()
        cy.get('[data-cy=progress-circular]')
        cy.get('button').contains('Load more').should('not.exist')
        cy.contains('We had problems fetching your data. Please try again!')
        cy.get('button').contains('Retry')
      })
    })
  })

  describe('On fetched all data state', function () {
    it('displays the fetched all data  message and hide button', function () {
      cy.get('[data-cy=info-table]:last').within(function () {
        cy.get('button').contains('Load more').click()
        cy.get('button').contains('Retry').click()
        cy.contains('Fetched all data!')
        cy.get('button').should('not.exist')
      })
    })
  })
})
