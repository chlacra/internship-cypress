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

   
       
    cy.get('#header-cart > div.minicart-wrapper > div.minicart-actions > ul > li > a')
    .should('have.text', 'Mobile')

        
    })

     // it('register functionality', () => {
      //  cy.get('body div.header-language-background p')
       // cy.get('.skip-account').click().scrollIntoView()  
       // cy.get(':nth-child(5) > a').click() 
      //  cy.get('#firstname',{timeout:11000}).type('Elena','{ delay: 500 }').should('have.value', 'Elena')  
      //  cy.get('#middlename',{timeout:11000}).type('E') 
      //  cy.get('#lastname',{timeout:11000}).type('Loghin').should('have.value','Loghin')  
     //   cy.get('#email_address',{timeout:11000}).type('Loelena@asdfg.org').should('have.value', 'Loelena@asdfg.org')   
      //  cy.get('#password',{timeout:11000}).type('123456').should('have.value', '123456')
      //  cy.get('#confirmation',{timeout:11000}).type('123456').should('have.value', '123456')
       // cy.get('.buttons-set > .button').click() 
      //  cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text', 'Thank you for registering with Main Website Store.')
      //  cy.get('a > strong').click()//

ALTE TESTE

      // describe('ShoppingCart functionality', () => {

    //beforeEach(() => {
  
        //cy.visit('http://automationpractice.com/index.php')
     /// })
      //it.only(' Add to cart from product page unregistred user', () => {
       //cy.get('#search_query_top').click().type('dress{enter}')
      // cy.get('#center_column > h1').should('have.text', ' Search           ')
       


      //})
    //})



API 
//describe(' API cypress test suite', () => {
  //  it('should return book by ID ', () => {
        //cy.request({
        // method: 'GET',
          //  url: 'https://restful-booker.herokuapp.com/booking/:id'})
  //  })

//})
cy.log(JSON.stringify(
                    
  {
      "200": 1,
      "sold": 7,
      " not available": 1,
      "teststa5": 634,
      "string": 63,
      "{{status}}": 6,
      "pending": 3,
      "available": 264,
      "ok": 5,
      "OK": 1,
      "free": 1,
      "peric": 1
    }))
  })
})

})



