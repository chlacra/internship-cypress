// <reference types="cypress" />

describe('Registered customers functionalities', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
    })
    
  
    it('Check updating account information', () => {
         cy.get('body div.header-language-background p')
         cy.get('.skip-account').click().scrollIntoView()
         cy.get('#header-account > .links > ul > .last > a').click()
         cy.get('#email').type('purielena@asdfg.org').should('have.value','purielena@asdfg.org' )
         cy.get('#pass').type('123456').should('have.value','123456')
         cy.get('#send2 > :nth-child(1) > span').click()
         cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
    
        
         cy.get('.block-content > ul > :nth-child(2)').click() //* varianta pentru apasat pe ACCOUNT INFORMATION
         cy.get('#firstname').clear().type('Mimi')
         cy.get('#middlename').clear().type('Mi')
         cy.get('.name-lastname > .input-box').clear().type('Ionescu')
         cy.get('#email').clear().type('mamaria@wery.org')
         cy.get('#current_password').type('123456')
         cy.get('.control > label').click()
         cy.get('#password').type('214365')
         cy.get('#confirmation').type('214365')
         cy.get('.buttons-set > .button').click()

         //cy.get(':nth-child(3) > .col2-set > .col-1 > .box > .box-title > a').click() //* varianta pt apasat pe butonul EDIT
    
        cy.contains('Account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
       cy.get('body > div > div > div.main-container.col1-layout > div > div > div > h1').should('have.text','You are now logged out')
    })
      
      it('Check  if adding a new address is possible', () => {
            
            cy.get('body div.header-language-background p')
            cy.get('.skip-account').click().scrollIntoView()
            cy.get('#header-account > .links > ul > .last > a').click()
            cy.get('#email').type('purielena@asdfg.org').should('have.value','purielena@asdfg.org' )
            cy.get('#pass').type('123456').should('have.value','123456')
            cy.get('#send2 > :nth-child(1) > span').click()
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
            cy.get('.block-content > ul > :nth-child(3) > a').click()
            cy.get('.page-title > .button > :nth-child(1) > span').click()
            cy.get('#telephone').click().type('0700999888')
            cy.get('#street_1')
              .click()
              .type('Universitatii  nr 21')
            cy.get('#city').click().type('Suceava')
            cy.get('#country').select('Romania')
            cy.get('#zip').click().type('727600')
            cy.get('#region_id').select('Suceava')
            cy.get('#primary_billing').click()
            cy.get('#primary_shipping').click()
            cy.get('.buttons-set > .button > :nth-child(1) > span').click()
            cy.contains('The address has been saved.')
                .should('have.text','The address has been saved.')
      })
    
      it('verify the selected address is the default one', () => {

        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('purielena@asdfg.org').should('have.value','purielena@asdfg.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span')
            .click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
            .should('have.text', 'My Dashboard')
        cy.get('#search')
            .click()
            .type('Samsung {enter}')
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title > h1').should('have.text','Search results for \'Samsung\'')
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.nav-1 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','Mobile')
        cy.get(':nth-child(2) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.nav-2 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','TV')
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.nav-1 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','Mobile')
        cy.get(':nth-child(3) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.first > .product-cart-actions > .input-text')
          .click()
          .clear()
          .type('5')
        cy.get('.first > .product-cart-actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.method-checkout-cart-methods-onepage-bottom > .button').click()
        cy.get('body > div > div > div.main-container.col2-right-layout > div > div.col-main > div > h1')
          .should('have.text','Checkout')
        cy.get('#billing-address-select')
        .select('Maria E Purice, Armeneasca  nr 21, Suceava, Suceava 727600, Romania')
        cy.get('#billing-buttons-container > .button > :nth-child(1) > span').click()

        
      })
      it('Verify if can add product to wish list', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('purielena@asdfg.org').should('have.value','purielena@asdfg.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
         cy.get('#search')
            .click()
            .type('Samsung {enter}')
          cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
          cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > div > h1').should('have.text','My Wishlist')
          cy.get('.nav-1 > .level0').click()
          cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','Mobile')
          cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
          cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > div > h1').should('have.text','My Wishlist')
          cy.get('.nav-1 > .level0').click()
          cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','Mobile')
          cy.get(':nth-child(3) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
          cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > div > h1').should('have.text','My Wishlist')
          cy.get('.nav-2 > .level0').click()
          cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','TV')
          cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
          cy.get('.skip-account').click()
          cy.get('#header-account > .links > ul > :nth-child(2) > a').click()
          cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > div > h1').should('have.text','My Wishlist')
          cy.get( '#item_51779 > td.wishlist-cell5.customer-wishlist-item-remove.last > a').click()
          cy.get('#item_51780 > .wishlist-cell5 > .btn-remove').click()
          cy.get('#item_51785 > .wishlist-cell5 > .btn-remove').click()
          cy.get('#item_51791 > .wishlist-cell5 > .btn-remove').click()
          cy.get('#item_51792 > .wishlist-cell5 > .btn-remove').click()
  
          cy.contains('Account').click()
           cy.get('#header-account > .links > ul > .last > a').click()
           cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div > h1').should('have.text','                Login or Create an Account            ')
            })

      it('Verify add to cart', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('purielena@asdfg.org').should('have.value','purielena@asdfg.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span')
            .click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
            .should('have.text', 'My Dashboard')
        cy.get('#search')
            .click()
            .type('Samsung {enter}')
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title > h1').should('have.text','Search results for \'Samsung\'')
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.nav-1 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','Mobile')
        cy.get(':nth-child(2) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.nav-2 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','TV')
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.nav-1 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title.category-title > h1').should('have.text','Mobile')
        cy.get(':nth-child(3) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.first > .a-center > .btn-remove').click()
        cy.get('.first > .product-cart-actions > .input-text')
          .click()
          .clear()
          .type('5')
        cy.get('.first > .product-cart-actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('#empty_cart_button > :nth-child(1) > span').click()
       cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1').should('have.text','Shopping Cart is Empty')

      })
      
     
      it('verify the order status', () => {
      

        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('purielena@asdfg.org').should('have.value','purielena@asdfg.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span')
            .click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
            .should('have.text', 'My Dashboard')
        cy.get('.block-content > ul > :nth-child(4) > a').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.page-title > h1').should('have.text','My Orders')
        cy.get('[href="http://live.demoguru99.com/index.php/sales/order/view/order_id/14911/"]').click()
        cy.get('#order-info-tabs > li').should('have.text','Order Information')
        cy.get('#order-item-row-17007 > td:nth-child(4) > span > strong').should('have.text','5')
    
      })

    })
