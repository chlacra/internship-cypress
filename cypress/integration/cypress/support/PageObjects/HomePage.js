class HomePage{

    elements = {

        accountInput: () => cy.get('.skip-account'),
        login: () => cy.get('#header-account > .links > ul > .last > a'),
        register: () => cy.get(':nth-child(5) > a')
    }
    clickAccount(account){

        this.elements.accountInput().click();
    }
    clickLogin(login){

        this.elements.login().click();
    } 
    clickRegister(register){
        
    this.elements.register().click()

    }
}
 module.exports= new HomePage();