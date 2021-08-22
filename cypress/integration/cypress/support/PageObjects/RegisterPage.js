class RegisterPage{

elements ={

    firstNameInput: () =>  cy.get('#firstname'),
    middleNameInput: () => cy.get('#middlename'),
    lastNameInput: () => cy.get('#lastname'),
    emailAddressInput: () => cy.get('#email_address'),
    passInput: () => cy.get('#password'),
    confirmPassInput: () => cy.get('#confirmation'),
    registerBtn: () =>  cy.get('.buttons-set > .button'),
    createAnAccount:() => cy.get('body > div > div > div.main-container.col1-layout > div > div > div > div > h1').should('have.text','Create an Account'),
    accoutCreated: ()  => cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text', 'Thank you for registering with Main Website Store.')
}
   
typefirstNameInput(firstName){

    this.elements.firstNameInput().type(firstName);

    }
 typeLastNameInput(lastName){

    this.elements.lastNameInput().type(lastName);

    }
 typeMiddleNameInput(middleName){

    this.elements.middleNameInput().type(middleName);

    }
typeEmailAddressInput(emailAddress){

    this.elements.emailAddressInput().type(emailAddress);

    }
typepassInput(pass){

    this.elements.passInput().type(pass);

    }
typeConfirmPassInput(confirmPass){

    this.elements.confirmPassInput().type(confirmPass);
    }
clickRegisterBtn(registerBtn){  

    this.elements.registerBtn().click()

    }
shouldMiddleNameInput(middleName){
        this.elements.middleNameInput().should('have.not.text')

    }

}
module.exports= new RegisterPage();





    



