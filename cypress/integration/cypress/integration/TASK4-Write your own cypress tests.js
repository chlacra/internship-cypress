// <reference types="cypress" />

describe('ShoppingCart functionality', () => {

    beforeEach(() => {
  
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
      })
    
    it(' Add to cart,update,checkout,verify order  registred user', () => {
    cy.get('#MenuContent > a:nth-child(3)').click().should('have.attr', 'href')
    cy.get('#Catalog > form > p:nth-child(1)').should('have.text','Please enter your username and password.')
    cy.get('input[name=username]').click().clear().type('ADA')
    cy.get('input[name="password"]').click().clear().type('123456')
    cy.get('[name="signon"]').click()
    cy.get('#MenuContent > a:nth-child(3)').should('have.text','Sign Out')
    cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
    cy.get(':nth-child(2) > :nth-child(5) > .Button').click()
    cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
    cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
    cy.get('.Button').click()
    cy.get(':nth-child(2) > :nth-child(5) > input').clear().type('120')
    cy.get('[colspan="7"] > input').click()
    cy.get('#Cart > h2').should('have.text','Shopping Cart')
    cy.get('[href="/actions/Order.action?newOrderForm="]').click()
   cy.get('#Catalog > form > table > tbody > tr:nth-child(1) > th').should('have.text','Payment Details')
    cy.get('[name="newOrder"]').click()
    cy.get('#Catalog > table > tbody > tr:nth-child(1) > th > font:nth-child(1) > b').should('have.text','Order')
    cy.get('.Button').click()
    cy.get('#Content > ul > li').should('have.text','Thank you, your order has been submitted.')
    cy.get('[href="/actions/Account.action?editAccountForm="]').click()
    cy.get('#Catalog > form > h3:nth-child(1)').should('have.text','User Information')
    cy.get('#Catalog > a').click()
    cy.get('#Content > h2').should('have.text','My Orders')
    cy.get('[href="/actions/Account.action?signoff="]').click()

    })
    it(' Add to cart from product page unregistred user', () => {
    cy.get('[size="14"]').click().type('fish')
    cy.get('[name="searchProducts"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > b > a > font').click()
    cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
    cy.get('.Button').click()
    cy.get('#Cart > h2').should('have.text','Shopping Cart')
    cy.get(':nth-child(5) > input').clear().type('5') 
    cy.get('[colspan="7"] > input').click()
    cy.get(':nth-child(8) > .Button').click() 
    cy.get('#Cart > form > table > tbody > tr:nth-child(2) > td > b').should('have.text','Your cart is empty.')

    })

})
       // describe('ShoppingCart functionality', () => {

    //beforeEach(() => {
  
        //cy.visit('http://automationpractice.com/index.php')
     /// })
      //it.only(' Add to cart from product page unregistred user', () => {
       //cy.get('#search_query_top').click().type('dress{enter}')
      // cy.get('#center_column > h1').should('have.text', ' Search           ')
       


      //})
    //})