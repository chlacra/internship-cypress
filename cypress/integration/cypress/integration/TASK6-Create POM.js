// type definitions for Cypress object "cy"
// <reference types="cypress" />
import CustomerLogin from '../support/PageObjects/CustomerLogin'
import HomePage from '../support/PageObjects/HomePage'
import RegisterPage from '../support/PageObjects/RegisterPage';

describe('Automation Test Suite using POM  for log in', function() {

    beforeEach(() =>{
      cy.visit('http://live.demoguru99.com')
    });
    

    it('Login into account with valid data', function() {
       HomePage.clickAccount(),
       HomePage.clickLogin(),
       CustomerLogin.elements.titleSpan().should('have.text','                Login or Create an Account            '),
       CustomerLogin.typeEmail('ananasverde@taiat.org'),
       CustomerLogin.typePassword('123456'),
       CustomerLogin.clickLoginBtn(),
       CustomerLogin.elements.dashBoard().should('have.text','My Dashboard')

     

    });
  
    it('Check response with invalid email address and valid password', () => {
        HomePage.clickAccount(),
       HomePage.clickLogin(),
       CustomerLogin.elements.titleSpan().should('have.text','                Login or Create an Account            '),
       CustomerLogin.typeEmail('ananasverde@taiat.ort'),
       CustomerLogin.typePassword('123456'),
       CustomerLogin.clickLoginBtn(),
        CustomerLogin.elements.errorMessageInvalid().should('have.text','Invalid login or password.')
      
    });

    it('Check response with valid email address and invalid password', () => {
        HomePage.clickAccount(),
        HomePage.clickLogin(),
        CustomerLogin.elements.titleSpan().should('have.text','                Login or Create an Account            '),
        CustomerLogin.typeEmail('ananasverde@taiat.org'),
        CustomerLogin.typePassword('12345'),
        CustomerLogin.clickLoginBtn(),
         CustomerLogin.elements.errorMessageSixCh().should('have.text','Please enter 6 or more characters without leading or trailing spaces.')
    });

     it('Check response with email address field empty', () => {
        HomePage.clickAccount(),
        HomePage.clickLogin(),
        CustomerLogin.elements.titleSpan().should('have.text','                Login or Create an Account            '),
        CustomerLogin.shouldEmail('have.not.text'),
        CustomerLogin.shouldPassword('have.not.text'),
        CustomerLogin.clickLoginBtn(),
        CustomerLogin.elements.errorMessageReqAdd().should('have.text', 'This is a required field.'),
        CustomerLogin.elements.errorMessageReqPass().should('have.text','This is a required field.')
    

     });

     it('Check response password field empty', () => {
        HomePage.clickAccount(),
        HomePage.clickLogin(),
        CustomerLogin.elements.titleSpan().should('have.text','                Login or Create an Account            '),
        CustomerLogin.typeEmail("ananasverde@taiat.org"),
        CustomerLogin.shouldPassword('have.not.text'),
        CustomerLogin.clickLoginBtn(),
        CustomerLogin.elements.errorMessageReqPass().should('have.text','This is a required field.')
     });
     it('Check response with email address field empty', () => {
        HomePage.clickAccount(),
        HomePage.clickLogin(),
        CustomerLogin.elements.titleSpan().should('have.text','                Login or Create an Account            '),
        CustomerLogin.shouldEmail('have.not.text'),
        CustomerLogin.typePassword('123456')
        CustomerLogin.clickLoginBtn(),
        CustomerLogin.elements.errorMessageReqAdd().should('have.text', 'This is a required field.')
     });
});

    describe(' Register functionality', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
    
    })
        it('Check response with valid data for all fields', () => {
            HomePage.clickAccount(),
            HomePage.clickRegister(),
            RegisterPage.elements.createAnAccount().should('have.text','Create an Account'),
            RegisterPage.typefirstNameInput('John'),
            RegisterPage.typeMiddleNameInput('E'),
            RegisterPage.typeLastNameInput('Johnson'),
            RegisterPage.typeEmailAddressInput('capsun@copt.org')
            RegisterPage.typepassInput('123456'),
            RegisterPage.typeConfirmPassInput('123456'),
            RegisterPage.clickRegisterBtn(),
            RegisterPage.elements.createAnAccount().should('have.text', 'Thank you for registering with Main Website Store.')


         });
         it('Check response with valid data for requierd filds and empty not required fields', () => {
            HomePage.clickAccount(),
            HomePage.clickRegister(),
            RegisterPage.elements.createAnAccount().should('have.text','Create an Account'),
            RegisterPage.typefirstNameInput('John'),
            RegisterPage.shouldMiddleNameInput('have.not.text'),
            RegisterPage.typeLastNameInput('Johnson'),
            RegisterPage.typeEmailAddressInput('capsuniiiiii@copt.org')
            RegisterPage.typepassInput('123456'),
            RegisterPage.typeConfirmPassInput('123456'),
            RegisterPage.clickRegisterBtn(),
            RegisterPage.elements.accoutCreated().should('have.text', 'Thank you for registering with Main Website Store.')
         });
});
