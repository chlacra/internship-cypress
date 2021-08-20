describe('API request', () => {
        it('check if returns a map of status codes to quantities', () => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/store/inventory'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                //expect(response.body.quantidade).to.eq(12)
               // expect(response.body.produtos[0]).to.have.all.keys(
                    //"200", "sold", "not available", "string", "{{status}}","pending", "available","ok","OK", "free","peric"
                  //)
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
            


/*describe('Products api', () => {
    context('GET /produtos', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});*/