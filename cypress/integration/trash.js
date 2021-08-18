cy.get('.product-cart-actions > .input-text')
        .click()
        .clear()
        .type('2')
        cy.get('.product-cart-actions > .button > :nth-child(1) > span').click()
        cy.get('.nav-2 > .level0')
        .click()


       
       //  cy.get('.action-select').should('have.value','billing[region_id]')//




       it( 'Check  finalize a purchase', () => {
        cy.get('body div.header-language-background p')
        cy.get('.nav-1 > .level0').click()
        cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.category-products > ul') 
            .scrollIntoView() 
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span')
            .click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span')
            .should('have.text', 'Samsung Galaxy was added to your shopping cart.')
        cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','LG LCD was added to your shopping cart.')
        cy.get('.method-checkout-cart-methods-onepage-bottom > .button > :nth-child(1) > span').click()
       // cy.get('.col-1 > .form-list > :nth-child(1) > label').click()
       // cy.get('#onepage-guest-register-button > :nth-child(1) > span').click()
    })

CA SA EDITEZ CANTITATEA

    cy.get('.product-cart-actions > .input-text')
    .click()
    .clear()
    .type('2')
    cy.get('.product-cart-actions > .button > :nth-child(1) > span').click()
    cy.get('.nav-2 > .level0')
    .click()
    cy.get(':nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span').click()
    cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('have.text','LG LCD was added to your shopping cart.')

   
       


        
    })