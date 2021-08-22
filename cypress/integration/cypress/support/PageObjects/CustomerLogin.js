class CustomerLogin {

    elements = {
    
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#pass'),
        loginBtn: () => cy.get('#send2'),
        titleSpan: () => cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div > h1').should('have.text','                Login or Create an Account            ' ),
        dashBoard: () =>  cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text', 'My Dashboard'),
        errorMessageInvalid: () =>  cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li').should('have.text', 'Invalid login or password.'),
        errorMessageSixCh: () =>  cy.get('#advice-validate-password-pass').should('have.text', 'Please enter 6 or more characters without leading or trailing spaces.'),
        errorMessageReqAdd: () => cy.get('#advice-required-entry-email').should('have.text', 'This is a required field.'),
        errorMessageReqPass:() => cy.get('#advice-required-entry-pass').should('have.text','This is a required field.')
    }
    
    typeEmail(email){

        this.elements.emailInput().type(email);
       
    }
    typePassword(password){
        this.elements.passwordInput().type(password);
      
    }
    clickLoginBtn(loginBtn){      
        this.elements.loginBtn().click()
    }
    shouldEmail(email){
        this.elements.emailInput().should('have.not.text')

    }
    shouldPassword(password){
        this.elements.passwordInput().should('have.not.text')}

}
module.exports= new CustomerLogin();