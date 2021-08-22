describe('API request', () => {
        it('GET- a map of status codes to quantities', () => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/store/inventory'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                
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
                  
        
            
        it('GET- pets by status ', () => {
            cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
            })
            .should((response) => {
                expect(response.status).to.eq(200)

            })
        })
    
        it('POST- new pet to list', () => {
         
            cy.request('POST', 'https://petstore.swagger.io/v2/user/createWithList',[ {
                "id": 0,
                "username": "string",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
              }]).then(
                (response) => {
                    expect(response.status).to.eq(200)
                })
            
            })

    it('POST -a new pet to the store', () => {
         
                cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
                
                    "id": 0,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "doggie",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                })
                  .then(
                    (response) => {
                        expect(response.status).to.eq(200)
                    })
        
            })
 it('PUT-update an existing pet', () => {
         
                cy.request('PUT', 'https://petstore.swagger.io/v2/pet', 
                {
                    "id": 9223372000666026000,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "doggie",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  })
                  .then(
                    (response) => {
                        expect(response.status).to.eq(200)
                    })
                })
            
it('PUT- update an user', () => {
         
                        cy.request('PUT', 'https://petstore.swagger.io/v2/user/Andrei',
                        {
                            "id": 0,
                            "username": "string",
                            "firstName": "string",
                            "lastName": "string",
                            "email": "string",
                            "password": "string",
                            "phone": "string",
                            "userStatus": 0
                          })
                          .then(
                            (response) => {
                                expect(response.status).to.eq(200)
                            })
            })

            
                    
})
        


    