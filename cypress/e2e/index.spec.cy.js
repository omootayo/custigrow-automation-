describe('login in custigrow site', () => {
	it('should enter correct details', () => {
		cy.fixture('elements').then(
			(el) => {
				cy.login();
			}
		);

		
	});

	/*describe('open Yopmail', () => {
		it('open yopmail and Verify email address', () => {
				
				cy.forceVisit('https://yopmail.com/en/', () => {
					cy.get('.ycptinput').should('be.visible').type('olascode')
				})
				
			});  

			///VERIFY EMAIL ADDRESS
        
                    cy.forceVisit(
                        'https://yopmail.com/en/',
                        () => {
                            cy.get('#login')
                                .should('be.visible')
                                .click().type('shine');
                            cy.get(
                                '#refreshbut > .md > .material-icons-outlined'
                            )
                                .should('be.visible')
                                .click();
                            cy.get(
                                '#ifinbox > :nth-child(1) > .m > .lm'
                            )
                                .should('be.visible')
                                .click();
                            cy.get('#ifmail > a > button')
                                .should('be.visible')
                                .click();
                        }
                    );
                
			
		});*/
});
