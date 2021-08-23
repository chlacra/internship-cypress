// <reference types="cypress" />
const orderNumberMock = 100014979;
describe('Registered customers functionalities', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
    })
    
  
    it('Check updating account information', () => {
         cy.get('body div.header-language-background p')
         cy.get('.skip-account').click().scrollIntoView()
         cy.get('#header-account > .links > ul > .last > a').click()
         cy.get('#email').type('e@example.org').should('have.value','e@example.org' )
         cy.get('#pass').type('214365678').should('have.value','214365678')
         cy.get('#send2 > :nth-child(1) > span').click()
         cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
         cy.get('.block-content > ul > :nth-child(2)').click() 
         cy.get('#firstname').clear().type('Mimi')
         cy.get('#middlename').clear().type('Mi')
         cy.get('.name-lastname > .input-box').clear().type('Ionescu')
         cy.get('#email').clear().type('f@example.org')
         cy.get('#current_password').type('214365678')
         cy.get('.control > label').click()
         cy.get('#password').type('2143656789')
         cy.get('#confirmation').type('2143656789')
         cy.get('.buttons-set > .button').click()
         cy.get('body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','The account information has been saved.')
        cy.contains('Account').click()
        cy.get('#header-account > .links > ul > .last > a').click()
       cy.get('body > div > div > div.main-container.col1-layout > div > div > div > h1').should('have.text','You are now logged out')
    })
      
      it('Check  if adding a new address is possible', () => {
            
            cy.get('body div.header-language-background p')
            cy.get('.skip-account').click().scrollIntoView()
            cy.get('#header-account > .links > ul > .last > a').click()
            cy.get('#email').type('ananasverde@taiat.org').should('have.value','ananasverde@taiat.org' )
            cy.get('#pass').type('123456').should('have.value','123456')
            cy.get('#send2 > :nth-child(1) > span').click()
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
            cy.get('.block-content > ul > :nth-child(3) > a').click()
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > h1').should('have.text','Address Book')
            cy.get('.page-title > .button').click()
            cy.get('h1').should('have.text','Add New Address')
            cy.get('#telephone').click().type('0700999888')
            cy.get('#street_1')
              .click()
              .type('Universitatii  nr 21')
            cy.get('#city').click().type('Suceava')
            cy.get('#country').select('Romania')
            cy.get('#zip').click().type('727600')
            cy.get('#region_id').select('Suceava')
            cy.get(':nth-child(5) > label').click()
            cy.get(':nth-child(6) > label').click()
            cy.get('.buttons-set > .button > :nth-child(1) > span').click()
            
            cy.contains('The address has been saved.')
                .should('have.text','The address has been saved.')
      })
    
      it('verify add to cart and verify the address', () => {

        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('ananasverde@taiat.org').should('have.value','ananasverde@taiat.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span')
            .click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
            .should('have.text', 'My Dashboard')
        cy.get('#search')
            .click()
            .type('Samsung {enter}')
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title > h1').should('have.text','Search results for \'Samsung\'')
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.category-products > ul > li:nth-child(1) > div > h2 > a').click()
        cy.get('.add-to-cart-buttons > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Samsung LCD was added to your shopping cart.')
        cy.get('#search').click().type('iphone {enter}')
        cy.get('h1').should('have.text', 'Search results for \'iphone\'')
        cy.get('.product-info > .product-name > a').click()
        cy.get('.add-to-cart-buttons > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','IPhone was added to your shopping cart.')
        cy.get('#search').click().type('Samsung {enter}')
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title > h1').should('have.text','Search results for \'Samsung\'')
        cy.get(':nth-child(2) > .product-info > .product-name > a').click()
        cy.get('.add-to-cart-buttons > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Samsung Galaxy was added to your shopping cart.')
        cy.get('#search').click().type('LG {enter}')
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.page-title > h1').should('have.text','Search results for \'LG\'')
        cy.get('.product-info > .product-name > a').click()
        cy.get('.add-to-cart-buttons > .button').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','LG LCD was added to your shopping cart.')
        cy.get('#shopping-cart-table > tbody > tr.first.odd > td.a-center.product-cart-remove.last > a').first().click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > h1').should('have.text','Shopping Cart')
        cy.get('.last.odd > .product-cart-actions > .input-text').click().clear().type('5')
        cy.get('.last.odd > .product-cart-actions > .button > :nth-child(1) > span').click()
        cy.get('.last.odd > .product-cart-actions > .input-text').should('have.value','5')
        cy.get('.method-checkout-cart-methods-onepage-bottom > .button').click()
         cy.get('body > div > div > div.main-container.col2-right-layout > div > div.col-main > div > h1')
        .should('have.text','Checkout')
        cy.get('#billing-address-select').select('Elena E Loghin, Universitatii  nr 21, Suceava, Suceava 727600, Romania')
        cy.get('#billing-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('#shipping-method-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('#dt_method_checkmo > label').click()
        cy.get('#payment-buttons-container > .button').click()
        cy.get('#review-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1').should('have.text','Your order has been received.')
        console.log(cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1'))
        
      })
      it('verify the order status', () => {
      

        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('ananasverde@taiat.org').should('have.value','ananasverde@taiat.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span')
            .click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
            .should('have.text', 'My Dashboard')
        cy.get('.block-content > ul > :nth-child(4) > a').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.page-title > h1').should('have.text','My Orders')
        cy.get('[href="http://live.demoguru99.com/index.php/sales/order/view/order_id/15052/"]').first().click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.page-title.title-buttons > h1').should('have.text',`Order #${orderNumberMock} - Pending`)
        cy.get('#order-item-row-17240 > td:nth-child(4) > span > strong').should('have.text','5')
        console.log(cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.page-title.title-buttons > h1'))
    
      })
      it.only('Verify if can add product to wish list', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .last > a').click()
        cy.get('#email').type('ananasverde@taiat.org').should('have.value','ananasverde@taiat.org' )
        cy.get('#pass').type('123456').should('have.value','123456')
        cy.get('#send2 > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard')
         cy.get('#search')
            .click()
            .type('Samsung {enter}')
            cy.get('h1').should('have.text','Search results for \'Samsung\'')
            cy.get(':nth-child(1) > .product-info > .product-name > a').click()
            cy.get('.link-wishlist').click()
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > ul > li > ul > li > span').should('have.text','Samsung LCD has been added to your wishlist. Click here to continue shopping.')
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > ul > li > ul > li > span > a').should('have.attr', 'href')
            cy.get('#search')
            .click()
            .type('Iphone {enter}')
            cy.get('.product-info > .product-name > a').click()
            cy.get('.link-wishlist').click()
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > ul > li > ul > li > span').should('have.text','IPhone has been added to your wishlist. Click here to continue shopping.')
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > ul > li > ul > li > span > a').should('have.attr', 'href')
            cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > div > h1').should('have.text','My Wishlist')
            cy.get('td.wishlist-cell1.customer-wishlist-item-info').contains('Samsung LCD').should('have.text','Samsung LCD')
            cy.get('td.wishlist-cell1.customer-wishlist-item-info > h3 > a').should('have.attr', 'href')
            cy.get('td.wishlist-cell1.customer-wishlist-item-info').contains('IPhone').should('have.text','IPhone')
            cy.get('td.wishlist-cell1.customer-wishlist-item-info > h3 > a').should('have.attr', 'href')
             cy.get('td.wishlist-cell5.customer-wishlist-item-remove.last > a').contains('Remove item').click()
             console.log(cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div.my-wishlist > div > h1'))


        
      })
      
     
     

    })
  