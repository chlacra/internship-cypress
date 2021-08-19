// <reference types="cypress" />

describe('Sort by functionality', () => {
    
    it(' xzvzzxzz', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.get('#MenuContent > a:nth-child(3)').click().should('have.attr', 'href')
    cy.get('input[name=username]').click().type('ADA')
    cy.get('input[name="password"]').click().type('123456')
    cy.get('[name="signon"]').click()






    })
})