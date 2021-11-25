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

  it('can load more content', function () {
    cy.get('[data-cy=info-table]:first').within(function () {
      cy.get('button').contains('Load more').click()
      cy.get('button').contains('Retry').click()
      cy.get('[data-cy=table-rows]').should('have.length', 6)
    })
  })

  // The tests for sorting functionality bases on the display order of the Date column
  describe('On sorting', function () {
    it('displays in reverse chronological order (newest first) as default', function () {
      cy.get('[data-cy=info-table]:first').within(function () {
        cy.get('[data-cy=timestamp]:first').contains('2020-2-16')
        cy.get('[data-cy=timestamp]:last').contains('2020-2-14')
      })
    })

    it('displays in chronological order after softing', function () {
      cy.get('[data-cy=info-table]:first').within(function () {
        cy.get('[data-cy=sorting-btn]').click()
        cy.get('[data-cy=timestamp]:first').contains('2020-2-14')
        cy.get('[data-cy=timestamp]:last').contains('2020-2-16')
      })
    })

    it('displays in same sorting order after loading more data', function () {
      cy.get('[data-cy=info-table]:first').within(function () {
        cy.get('button').contains('Load more').click()
        cy.get('button').contains('Retry').click()
        // here we need to wait to simulate the delay of API
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000)
        cy.get('[data-cy=timestamp]:first').contains('2020-2-19')
        cy.get('[data-cy=timestamp]:last').contains('2020-2-14')
      })
    })
  })

  // I will use the second table for later testing since it has less data and more convenient to test
  describe('On loading state', function () {
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
