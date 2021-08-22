// <reference types="cypress" />
const orderIdMock = 100014915;

describe(' Add an item to cart functionality for unregistred customers', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
    })
 
    it( 'Check search functionality', () => {
        cy.get('body div.header-language-background p')
        cy.get('#search')
            .click()
            .type('Samsung {enter}')
    })

    it( 'Check add items to cart functionality from Category page', () => {
        cy.get('body div.header-language-background p')
        cy.get('#search')
            .click()
            .type('Samsung {enter}')
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','Samsung LCD was added to your shopping cart.')
        cy.get('.page-title > .checkout-types > li > .button > :nth-child(1) > span').click()
        cy.get('#opc-login > .step-title > h2').should('have.text','Checkout Method')
        cy.get('.col-1 > .form-list > :nth-child(1) > label').click()
        cy.get('#onepage-guest-register-button > :nth-child(1) > span').click()     
        cy.get('#billing\\:firstname').click()
        cy.get('#billing\\:firstname').type('Elena')
        cy.get('#billing\\:middlename')
            .click()
            .should('have.not.text')
        cy.get('#billing\\:lastname')
            .click()
            .type('Loghin')
        cy.get('#billing\\:company')
            .should('have.not.text')
        cy.get('#billing\\:email')
            .click()
            .type('aluneverzi@huhu.org')
        cy.get('#billing\\:street1')
            .click()
            .type('Suceava, Universitatii nr 1')
        cy.get('#billing\\:street2')
            .click()
            .should('have.not.text')
        cy.get('#billing\\:city')
            .type('Suceava')
        cy.get('#billing\\:country_id').select('Romania')
        cy.get('#billing\\:region_id').select('Suceava')
        cy.get('#billing\\:postcode')
            .click()
            .type('727601')
        cy.get('#billing\\:telephone')
            .click()
            .type('0772345678')
        cy.get('#billing\\:fax')
            .click()
            .should('have.not.value')
        cy.get('#co-billing-form > :nth-child(1) > .form-list > :nth-child(2) > label').click()
        cy.get('#billing-buttons-container > .button').click()
        cy.get('#opc-shipping_method > div.step-title > h2').should('have.text','Shipping Method')
        cy.get('#shipping-method-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('#opc-payment > .step-title > h2').should('have.text','Payment Information')
        cy.get('#dt_method_ccsave > label').click()
        cy.get('#ccsave_cc_owner')
            .click()
            .type('Elena Loghin')
        cy.get('#ccsave_cc_type').select('Visa')
        cy.get('#ccsave_cc_number').click().type(4539000107988034)
        cy.get('#ccsave_expiration').select('04 - April')
        cy.get('#ccsave_expiration_yr').select('2022')
        cy.get('#ccsave_cc_cid').click().type(799)
        cy.get('#payment-buttons-container > .button').click()
        cy.get('#opc-review > div.step-title > h2').should('have.text','Order Review')
        cy.get('#review-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1')
        .should('have.text','Your order has been received.')
       
    })
        
    it( 'Check add items to cart functionality from Product page', () => {
            cy.get('body div.header-language-background p')
            cy.get('#search')
                .click()
                .type('Samsung {enter}') 
            cy.get('#product-collection-image-3').click()
            cy.get('.add-to-cart-buttons > .button > :nth-child(1) > span').click()
            cy.get('.page-title > .checkout-types > li > .button > :nth-child(1) > span').click()
        cy.get('#opc-login > .step-title > h2').should('have.text','Checkout Method')
        cy.get('.col-1 > .form-list > :nth-child(1) > label').click()
        cy.get('#onepage-guest-register-button > :nth-child(1) > span').click()
        cy.get('#billing\\:firstname').click()
        cy.get('#billing\\:firstname').type('Elena')
        cy.get('#billing\\:middlename')
            .click()
            .should('have.not.text')
        cy.get('#billing\\:lastname')
            .click()
            .type('Loghin')
        cy.get('#billing\\:company')
            .should('have.not.text')
        cy.get('#billing\\:email')
            .click()
            .type('aluneverzi@huhu.org')
        cy.get('#billing\\:street1')
            .click()
            .type('Suceava, Universitatii nr 1')
        cy.get('#billing\\:street2')
            .click()
            .should('have.not.text')
        cy.get('#billing\\:city')
            .type('Suceava')
        cy.get('#billing\\:country_id').select('Romania')
        cy.get('#billing\\:region_id').select('Suceava')
        cy.get('#billing\\:postcode')
            .click()
            .type('727601')
        cy.get('#billing\\:telephone')
            .click()
            .type('0772345678')
        cy.get('#billing\\:fax')
            .click()
            .should('have.not.value')
        cy.get('#co-billing-form > :nth-child(1) > .form-list > :nth-child(2) > label').click()
        cy.get('#billing-buttons-container > .button').click()
        cy.get('#opc-shipping_method > div.step-title > h2').should('have.text','Shipping Method')
        cy.get('#shipping-method-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('#opc-payment > .step-title > h2').should('have.text','Payment Information')
        cy.get('#dt_method_ccsave > label').click()
        cy.get('#ccsave_cc_owner')
            .click()
            .type('Elena Loghin')
        cy.get('#ccsave_cc_type').select('Visa')
        cy.get('#ccsave_cc_number').click().type(4539000107988034)
        cy.get('#ccsave_expiration').select('04 - April')
        cy.get('#ccsave_expiration_yr').select('2022')
        cy.get('#ccsave_cc_cid').click().type(799)
        cy.get('#payment-buttons-container > .button').click()
        cy.get('#opc-review > div.step-title > h2').should('have.text','Order Review')
        cy.get('#review-buttons-container > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1')
        .should('have.text','Your order has been received.')
    })

     it( 'Check the order status with Email Address', () => {
        cy.get('body div.header-language-background p')
        cy.get(':nth-child(4) > ul > .last > a').click()
        cy.get('#oar_widget_orders_and_returns_form > div.fieldset > h2')
            .should('have.text','Order Information')
        cy.get('#oar_order_id')
            .click()
            .type(orderIdMock)
        cy.get('#oar_billing_lastname')
            .click()
            .type('Loghin')
        cy.get('#quick_search_type_id')
            .select('Email Address')
        cy.get('#oar_email')
            .click()
            .type('aluneverzi@huhu.org')
        cy.get('.buttons-set > .button').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div.col-main > div.page-title.title-buttons > h1')
        .should('have.text', `Order #${orderIdMock} - Pending`)
        console.log(cy.get('body > div > div > div.main-container.col1-layout > div > div.col-main > div.page-title.title-buttons > h1'))
        
     })
    it( 'Check the order status from Footer with ZIP Code', () => {
        cy.get('body div.header-language-background p')
        cy.get(':nth-child(4) > ul > .last > a')
            .click()
        cy.get('#oar_widget_orders_and_returns_form > div.fieldset > h2')
            .should('have.text','Order Information')
        cy.get('#oar_order_id')
            .click()
            .type(orderIdMock)
        cy.get('#oar_billing_lastname')
            .click()
            .type('Loghin')
        cy.get('#quick_search_type_id').select('ZIP Code')
        cy.get('#oar_zip')
            .click()
            .type('727601')
        cy.get('.buttons-set > .button').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div.col-main > div.page-title.title-buttons > h1')
        .should('have.text', `Order #${orderIdMock} - Pending`)
        console.log(cy.get('body > div > div > div.main-container.col1-layout > div > div.col-main > div.page-title.title-buttons > h1'))
       
    })
    
})

