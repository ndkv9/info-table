/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe('History Table App', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('implements the first load', function () {
    cy.contains('Loading..')
  })
})
