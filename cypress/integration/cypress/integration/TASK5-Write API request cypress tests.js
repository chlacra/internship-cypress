
describe(' API cypress test suite', () => {
    it('should return pet by ID ', () => {
        cy.request({

         method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/:id'})
    })

})