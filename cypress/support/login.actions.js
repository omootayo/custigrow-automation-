Cypress.Commands.add(
	'login',
	(email, password) => {
		cy.fixture('elements').then(
			(el) => {
				//////////////FOR CREATE ACCOUNT////////////////
				/*cy.get('.flex > .btn')
					.should('be.visible')
					.click()
					.wait(4000);
				cy.get('input[type = "email"]')
					.should('be.visible')
					.type('niel@yopmail.com');
				cy.get(
					':nth-child(2) > .relative > input[type = "password"]'
				)
					.should('be.visible')
					.type('#Olayinka22');
				cy.get(
					':nth-child(3) > .relative > input[type = "password"]'
				)
					.should('be.visible')
					.type('#Olayinka22');
				cy.get(
					'input[type = "checkbox"]'
				)
					.should('not.be.visible')
					.check({ force: true })
					.should('be.checked')
					.check();
				cy.get('form > .btn')
					.should('be.visible')
					.click();
				cy.go('back').wait(3000);*/

				///////FOR LOGIN///////////
				cy.get('input[type = "email"]')
					.should('be.visible')
					.type('abeg@yopmail.com');
				cy.get(
					'input[type = "password"]'
				)
					.should('be.visible')
					.type('#Olayinka22');
				cy.get('form > .btn')
					.should('be.visible')
					.click();

				//////////ONBOARDING SESSION/////////////

				/////THE FIRST PAGE OF THE ONBORDING SESSION////
				/*cy.get(
					'.mr-32 > .flex-col > .false'
				)
					.should('be.visible')
					.type('Tiannah Duel');
				cy.get(
					':nth-child(2) > .flex-col > .false'
				)
					.should('be.visible')
					.type('bagos');
				cy.get('.undefined')
					.should('be.visible')
					.type('Lagos');
				cy.get(
					'.mb-24 > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
				).click();
				cy.get(
					'.dropdown_scrollDropdown__yx_nB'
				).scrollTo('bottom');
				cy.get(':nth-child(7) > p')
					.should('be.visible')
					.click();
				cy.get('.border-0')
					.should('be.visible')
					.type('08065014616');

				// test case
				//upload file to the required field
				cy.get(
					'input[type=file]'
				).attachFile('picture.jpg');

				//click on upload button
				cy.get(
					'.createCompany_customFileInput__giiMN'
				).click();

				//verify uploaded file
				cy.get('.btn')
					.should('be.visible')
					.click()
					.wait(12000);

				//THE SECOND PAGE OF THE ONBOARDING SESSION

				cy.get(
					':nth-child(1) > .mr-32 > .flex-col > .false'
				)
					.should('be.visible')
					.type('bagos');
				cy.get(
					':nth-child(1) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
				)
					.should('be.visible')
					.click();
				cy.get(
					'.px-16 > .flex > span > img'
				)
					.should('be.visible')
					.click();
				cy.get(
					'.inputModal_card__bVA8m > .mb-24'
				)
					.should('be.visible')
					.type('handbags');
				cy.get('.justify-end > .btn')
					.should('be.visible')
					.click();
				cy.get(
					':nth-child(1) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
				)
					.should('be.visible')
					.click();
				cy.get(
					'.border-b > :nth-child(1) > :nth-child(1)'
				)
					.should('be.visible')
					.click();
				cy.get('.mr-32 > input')
					.should('be.visible')
					.click();
				cy.get('.mr-32 > input').type(
					'2025-02-12'
				);
				cy.get(
					':nth-child(2) > .flex-col > .border > .border-0'
				)
					.should('be.visible')
					.type('5');
				cy.get(
					':nth-child(3) > .mr-32 > .flex-col > :nth-child(2) > .false'
				)
					.should('be.visible')
					.type('100');
				cy.get(
					':nth-child(3) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
				)
					.should('be.visible')
					.click();
				cy.get(
					'.px-16 > .flex > span > img'
				)
					.should('be.visible')
					.click();
				cy.get(
					'.inputModal_card__bVA8m > .mb-24'
				)
					.should('be.visible')
					.type('per stock');
				cy.get('.justify-end > .btn')
					.should('be.visible')
					.click();
				cy.get(
					':nth-child(3) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
				)
					.should('be.visible')
					.click();
				cy.get(
					'.dropdown_scrollDropdown__yx_nB'
				).scrollTo('bottom');
				cy.get(':nth-child(5) > p')
					.should('be.visible')
					.click();
				cy.get(
					':nth-child(4) > .mr-32 > .flex-col > :nth-child(2) > .false'
				)
					.should('be.visible')
					.type('5000');
				cy.get(
					':nth-child(2) > .flex-col > :nth-child(2) > .false'
				)
					.should('be.visible')
					.type('6000');
				cy.get(
					'.mr-32 > .flex-col > .border > .border-0'
				)
					.should('be.visible')
					.type('50');
				cy.get(
					':nth-child(6) > .mr-32 > .flex-col > .false'
				)
					.should('be.visible')
					.type('20');
				cy.get(
					':nth-child(2) > .flex-col > input'
				)
					.should('be.visible')
					.type('5');

				cy.get(
					'.createCompany_customFileInput__giiMN'
				).click();
				cy.get(
					'input[type=file]'
				).attachFile('bag.jpg');
				//click on upload button
				cy.get('.btn')
					.should('be.visible')
					.click();

				//////INVITE USERS///////

				cy.get(
					':nth-child(1) > .undefined'
				)
					.should('be.visible')
					.type('redo@yopmail.com');
				cy.get(
					':nth-child(2) > .undefined'
				)
					.should('be.visible')
					.type('redoy@yopmail.com');
				cy.get(
					':nth-child(3) > .undefined'
				)
					.should('be.visible')
					.type('redoya@yopmail.com');
				cy.get('.btn')
					.should('be.visible')
					.click();
				cy.get(
					'.feedbackModal_card__7T0hH > .btn'
				)
					.should('be.visible')
					.click()
					.wait(8500);*/
			}
		);

		////INVENTORY SECTION////
		/*cy.get(
			'.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(2) > .false > span > img'
		)
			.should('be.visible')
			.click()
			.wait(9000);
		cy.get(
			'.inventory_scrollHidden__tzBVj'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.h-auto > :nth-child(1) > :nth-child(2) > :nth-child(1) > img'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.inputModal_card__bVA8m > .mb-24'
		)
			.should('be.visible')
			.clear()
			.type('Luxurious bags');
		cy.get(
			'.inputModal_card__bVA8m > .justify-end > .btn'
		)
			.should('be.visible')
			.click().wait(1500);
		cy.get('.slideInModal_children__Oplmj > :nth-child(1) > .btn')
			.should('be.visible')
			.click();
		cy.get(
			'.inputModal_card__bVA8m > .mb-24'
		)
			.should('be.visible')
			.type('baglux');
		cy.get(
			'.inputModal_card__bVA8m > .justify-end > .btn'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.inputModal_card__bVA8m > .items-center > span > .cursor-pointer'
		)
			.should('be.visible')
			.click()
			.wait(1000)
			.reload();
		cy.get(
			'.inventory_scrollHidden__tzBVj'
		)
			.should('be.visible')
			.click();
		cy.get(
			':nth-child(2) > :nth-child(2) > :nth-child(2) > img'
		)
			.should('be.visible')
			.click();
		cy.get('.btn-danger')
			.should('be.visible')
			.click();
		cy.get('.btn-outline-dark')
			.should('be.visible')
			.click()
			.wait(2000);
		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .slideInModal_modalHeader__yCPju > .cursor-pointer > span > img'
		)
			.should('be.visible')
			.click();

		//////TO ADD PRODUCT/////

		cy.get(':nth-child(2) > .btn')
			.should('be.visible')
			.click();

		cy.get(
			'.inventory_customFileInput__frUMR'
		).click();
		cy.get(
			'input[type=file]'
		).attachFile('T-shirts.jpg');
		//click on upload button

		cy.get('.flex-col > .false')
			.should('be.visible')
			.type('Tops and T-shirts');

		cy.get(
			':nth-child(1) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
		)
			.should('be.visible')
			.click();
		cy.get('.text-primary-limeGreen')
			.should('be.visible')
			.click();
		cy.get(
			'.inputModal_card__bVA8m > .mb-24'
		)
			.should('be.visible')
			.type('luxurious Ts');
		cy.get(
			'.inputModal_card__bVA8m > .justify-end > .btn'
		)
			.should('be.visible')
			.click();
		cy.get(
			':nth-child(1) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.border-b > :nth-child(1) > :nth-child(2)'
		)
			.should('be.visible')
			.click();
		cy.get('.mr-32 > input')
			.should('be.visible')
			.click();
		cy.get('.mr-32 > input').type(
			'2022-10-05'
		);
		cy.get(
			':nth-child(2) > .flex-col > .border > .border-0'
		)
			.should('be.visible')
			.type('2');
		cy.get(
			':nth-child(3) > .mr-32 > .flex-col > :nth-child(2) > .false'
		)
			.should('be.visible')
			.type('200');
		cy.get(
			':nth-child(3) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
		)
			.should('be.visible')
			.click();
		cy.get('.text-primary-limeGreen')
			.should('be.visible')
			.click();
		cy.get(
			'.inputModal_card__bVA8m > .mb-24'
		)
			.should('be.visible')
			.type('per stock');
		cy.get(
			'.inputModal_card__bVA8m > .justify-end > .btn'
		)
			.should('be.visible')
			.click();
		cy.get(
			':nth-child(3) > :nth-child(2) > .relative > .cursor-pointer > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.dropdown_scrollDropdown__yx_nB'
		).scrollTo('bottom');
		cy.get(
			':nth-child(1) > :nth-child(5) > p'
		)
			.should('be.visible')
			.click();
		cy.get(
			':nth-child(4) > .mr-32 > .flex-col > :nth-child(2) > .false'
		)
			.should('be.visible')
			.type('6500');
		cy.get(
			':nth-child(2) > .flex-col > :nth-child(2) > .false'
		)
			.should('be.visible')
			.type('7200');
		cy.get(
			'.mr-32 > .flex-col > .border > .border-0'
		)
			.should('be.visible')
			.type('50');
		cy.get(
			':nth-child(6) > .mr-32 > .flex-col > :nth-child(2) > .false'
		)
			.should('be.visible')
			.type('20');
		cy.get(
			':nth-child(6) > :nth-child(2) > .flex-col > :nth-child(2) > input'
		)
			.should('be.visible')
			.type('5');
		cy.get('.btn')
			.should('be.visible')
			.click();

		///////FOR FILTER BUTTON///////

		cy.get(
			'.flex-grow > .flex > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get('input[id="Low Stock"]')
			.should('not.be.visible')
			.check({ force: true })
			.wait(800);

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .absolute > .btn'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.flex-grow > .flex > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get('input[id="In-Stock"]')
			.should('not.be.visible')
			.check({ force: true })
			.wait(800);

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .absolute > .btn'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.flex-grow > .flex > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get('input[id="Stock Out"]')
			.should('not.be.visible')
			.check({ force: true })
			.wait(800);

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .absolute > .btn'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.flex-grow > .flex > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get('input[id="Dead Stock"]')
			.should('not.be.visible')
			.check({ force: true })
			.wait(800);

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .absolute > .btn'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.flex-grow > .flex > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.slideInModal_children__Oplmj > :nth-child(2) > .items-center'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.mr-24 > .flex-col > .undefined'
		)
			.should('be.visible')
			.type(200);

		cy.get(
			':nth-child(2) > :nth-child(2) > .flex-col > .undefined                                       '
		)
			.should('be.visible')
			.type(200);
		cy.get('.absolute > .btn')
			.should('be.visible')
			.click();


			cy.get(
				'.flex-grow > .flex > .items-center > .flex > span > img'
			)
				.should('be.visible')
				.click();
	

		cy.get(
			'.slideInModal_children__Oplmj > :nth-child(3) > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get('.mr-32 > input')
			.type('2022-09-30');

		cy.get(
			':nth-child(3) > :nth-child(2) > input'
		)
			.type('2022-10-05');


		cy.get('.absolute > .btn')
			.should('be.visible')
			.click();

		cy.get(
			'.flex-grow > .flex > .items-center > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.slideInModal_children__Oplmj > :nth-child(4) > .items-center'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.mr-24 > .flex-col > .undefined'
		)
			.should('be.visible')
			.type(50);

		cy.get(
			':nth-child(3) > :nth-child(2) > .flex-col > .undefined                                      '
		)
			.should('be.visible')
			.type(150);

		cy.get('.absolute > .btn')
			.should('be.visible')
			.click();


		///////FOR EXPORT BUTTON///////
		cy.get(
			'.flex > .items-center > .relative > .flex > span > img'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.inventory_exportDropdown__WtyuI > .flex'
		)
			.should('be.visible')
			.click()
			.wait(4000);


			///////SEARCH OPTION//////
		cy.get('.border-none')
			.should('be.visible')
			.type('Bagos{enter}');


			//////////ACTION BUTTON////////
		cy.get(
			'.inventory_tableRow__qR9fM > .relative > span > .cursor-pointer'
		)
			.should('be.visible')
			.click();

			cy.get(
				'.inventory_tableRow__qR9fM > .relative > :nth-child(2) > .inventory_dropdown__S6DHn > :nth-child(3)'
			)
				.should('be.visible')
				.click();
	
			cy.get(
				'.inventory_tableRow__qR9fM > .grid > .topup_card__c3dda > form > :nth-child(2) > .undefined'
			)
				.should('be.visible')
				.type('6{enter}');


			cy.get('.w-506 > .btn')
			.should('be.visible')
			.click();


			cy.get(
				'.flex-grow > :nth-child(1) > .relative > span > .cursor-pointer'
			)
				.should('be.visible')
				.click();

			cy.get('.flex-grow > :nth-child(1) > .relative > :nth-child(2) > .inventory_dropdown__S6DHn > :nth-child(4)')
			.should('be.visible')
			.click();


			cy.get(':nth-child(1) > .grid > .topup_card__c3dda > form > .flex-col > .undefined')
			.should('be.visible')
			.type('1{enter}');


			cy.get(':nth-child(1) > .grid > .topup_card__c3dda > form > .btn')
			.should('be.visible')
			.click();


			cy.get(':nth-child(1) > .grid > .topup_card__c3dda > .justify-between > .flex > span > img')
			.should('be.visible')
			.click();

			cy.get('.flex-grow > :nth-child(1) > .relative > :nth-child(2) > .inventory_dropdown__S6DHn > :nth-child(5)')
			.should('be.visible')
			.click();

			cy.get('[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 17px; height: 17px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img')
			.should('be.visible')
			.click(); 


			cy.get(':nth-child(2) > .ml-8')
			.should('be.visible')
			.click();

			cy.get('.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(2) > .bg-primary-limeGreen')
			.should('be.visible')
			.click();

			cy.get(
				'.flex-grow > :nth-child(1) > .relative > span > .cursor-pointer'
			)
				.should('be.visible')
				.click();

			cy.get('.flex-grow > :nth-child(1) > .relative > :nth-child(2) > .inventory_dropdown__S6DHn > :nth-child(6)')
			.should('be.visible')
			.click();

			cy.get(':nth-child(1) > .slideInModal_modalContainer__Y9kIt > .slideInModal_children__Oplmj > :nth-child(1) > :nth-child(4) > input')
			.should('be.visible')
			.type('7{enter}');

			cy.get(':nth-child(1) > .slideInModal_modalContainer__Y9kIt > .slideInModal_children__Oplmj > :nth-child(1) > .justify-between > .mr-32 > input')
			.type('2022-09-30');

			cy.get(':nth-child(1) > .slideInModal_modalContainer__Y9kIt > .slideInModal_children__Oplmj > :nth-child(1) > .justify-between > :nth-child(2) > input')
			.type('2022-10-30');

			cy.get('.flex-grow > :nth-child(1) > .slideInModal_modalContainer__Y9kIt > .absolute > .btn')
			.should('be.visible')
			.click();

			cy.get('.flex-grow > :nth-child(1) > .slideInModal_modalContainer__Y9kIt > .slideInModal_modalHeader__yCPju > .cursor-pointer > span > img')
			.should('be.visible')
			.click();

			cy.get('.flex-grow > :nth-child(1) > .relative > :nth-child(2) > .inventory_dropdown__S6DHn > :nth-child(7)')
			.should('be.visible')
			.click();

			cy.get(':nth-child(1) > .grid > .deleteModal_card__Z_Kbi > .justify-between > .btn-danger')
			.should('be.visible')
			.click();

			


			/////////SALES FRONT SECTION/////////

			cy.get('.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(3) > .false')
			.should('be.visible')
			.click();


			cy.get('.salesFront_saleswidth__EiVuz > .false')
			.should('be.visible')
			.click();

			cy.get('.salesFront_saleswidth__EiVuz > .false')
			.should('be.visible')
			.click();

			cy.get('.justify-between > .btn')
			.should('be.visible')
			.click();

			cy.get('.pt-40 > :nth-child(1) > :nth-child(2) > :nth-child(2)')
			.should('be.visible')
			.click();

			cy.get(':nth-child(3) > .relative > span > img')
			.should('be.visible')
			.click();

			cy.get(':nth-child(3) > .relative > span > img')
			.should('be.visible')
			.click();

			cy.get(':nth-child(3) > .relative > span > img')
			.should('be.visible')
			.click();

			cy.get('.h-35')
			.should('be.visible')
			.click();

			cy.get('.paymentModal_card__jJNbi > .gap-12 > .gap-10 > :nth-child(3)')
			.should('be.visible')
			.click();

			cy.get(
				'input[type = "checkbox"]'
			)
				.should('not.be.visible')
				.check({ force: true })
				.should('be.checked');

			cy.get('.btn')
			.should('be.visible')
			.click().wait(2000);

			cy.get('.btnPaymentActive')
			.should('be.visible')
			.click();

			cy.get('.justify-between > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.w-full > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get(':nth-child(3) > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.w-full > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.pt-40 > :nth-child(1) > :nth-child(2) > :nth-child(1)')
			.should('be.visible')
			.click();

			cy.get('a > .btn')
			.should('be.visible')
			.click();

			cy.get('.cursor-pointer > .flex')
			.should('be.visible')
			.click();

			cy.get('.cursor-pointer > .flex')
			.should('be.visible')
			.click();

			
			cy.get(':nth-child(1) > :nth-child(2) > .flex-col > .undefined')
			.should('be.visible')
			.type('002456789');

			cy.get(':nth-child(1) > .flex-col > .undefined')
			.should('be.visible')
			.type('Tiannah');

			cy.get(':nth-child(2) > :nth-child(2) > .flex-col > .undefined')
			.should('be.visible')
			.type('10224');

			cy.get('.justify-end > .btn')
			.should('be.visible')
			.click();

			cy.get('.flex.mb-16 > span > .cursor-pointer')
			.should('be.visible')
			.click();*/

		////////ORDERS SECTION//////////

		/*cy.get(
			'.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(4) > .false'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.flex > .items-center > .btn'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .slideInModal_children__Oplmj > :nth-child(1) > .false'
		)
			.should('be.visible')
			.type('Zec');

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .slideInModal_children__Oplmj > :nth-child(4) > .relative > .border-gray-line'
		)
			.should('be.visible')
			.click().wait(1500);

		cy.get('span > .rounded-full')
			.should('be.visible')
			.click();

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .slideInModal_children__Oplmj > :nth-child(5) > .false'
		)
			.should('be.visible')
			.type('5');

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .slideInModal_children__Oplmj > .text-primary-limeGreen'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .absolute > .btn'
		)
			.should('be.visible')
			.click()
			.wait(3000);


				////////EXPORT ORDERS BUTTON////////
		cy.get(
			'.flex > .items-center > .relative > .flex > span > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.orders_exportDropdown__O8PeJ > .flex'
		)
			.should('be.visible')
			.click();

			cy.get(
				'.undefined'
			)
				.should('be.visible')
				.click();

	
			/////THE FULFILLED ACTION BUTTON////

	cy.get(
		'[style="min-height: 400px;"] > :nth-child(1) > .relative > span > .cursor-pointer'
	)
		.should('be.visible')
		.click();

		cy.get(
			'[style="min-height: 400px;"] > :nth-child(1) > .flex.relative > .relative > .orders_dropdown__M9QxM > :nth-child(3)'
		)
			.should('be.visible')
			.click();

			cy.get(
				'[style="min-height: 400px;"] > :nth-child(1) > .flex.relative > .relative > .orders_dropdown__M9QxM > :nth-child(4) > .absolute > .mb-16 > .mt-16 > :nth-child(2)'
			)
				.should('be.visible')
				.click().wait(2000);

				cy.get(
					'[style="min-height: 400px;"] > :nth-child(1) > .flex.relative > .relative > .orders_dropdown__M9QxM > :nth-child(4) > .absolute > .mb-16 > .mt-16 > .btn'
				)
					.should('be.visible')
					.click().wait(12000);

					cy.get(
						'[style="min-height: 400px;"] > :nth-child(1) > .relative > span > .cursor-pointer'
					)
						.should('be.visible')
						.click();
					
			cy.get(
				'#order_view'
			)
				.should('be.visible')
				.click();

				cy.get(
					'.undefined'
				)
					.should('be.visible')
					.click();

					cy.get(
						'.undefined'
					)
						.should('be.visible')
						.click();

					cy.get(
						'[style="min-height: 400px;"] > :nth-child(1) > .flex.relative > .relative > .orders_dropdown__M9QxM > :nth-child(3)'
					)
						.should('be.visible')
						.click();
	

				

		/////////RETURNS SECTION/////////

		cy.get(
			'.slideInModal_children__Oplmj > :nth-child(1) > .false'
		)
			.should('be.visible')
			.type('Zack');

		cy.get('.border-0')
			.should('be.visible')
			.type('8065014616');

		cy.get(
			'.my-32 > .relative > .border-gray-line > span > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.phoneInput_scrollDropdown__jdUIE'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.relative > .mb-24 > .flex > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.dropdown_scrollDropdown__yx_nB > :nth-child(1) > :nth-child(1) > :nth-child(1)'
		)
			.should('be.visible')
			.click();

		cy.get('.btn')
			.should('be.visible')
			.click().wait(9000);

		/*cy.get('.relative > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.mb-4')
			.should('be.visible')
			.click();

			cy.get('.returns_dropdown__Eh23C > :nth-child(2)')
			.should('be.visible')
			.click();

			
			cy.get('.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(6) > .false > span > img')
			.should('be.visible')
			.click();

			cy.get(
				'.MuiInputBase-input'
			)
				.should('be.visible')
				.click();

				cy.get(
					'.MuiPickersMonth-monthSelected'
				)
					.should('be.visible')
					.click();

					cy.get(
						'.items-start > .btnPaymentActive > .flex'
					)
						.should('be.visible')
						.click();

						cy.get(
							'.btnInsightNonactive'
						)
							.should('be.visible')
							.click();

							cy.scrollTo('bottom')
							cy.scrollTo('top')*/

		/*cy.get(
			'.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(7) > .false'
		)
			.should('be.visible')
			.click()
			.wait(3000);*/


			//////////PRODUCT-BASED////////////

		/*cy.get('.justify-between > .btn')
			.should('be.visible')
			.click();

		cy.get(
			'.relative > .border-gray-line > span > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.phoneInput_scrollDropdown__jdUIE > :nth-child(2)'
		)
			.should('be.visible')
			.click();

		cy.get(':nth-child(3) > input')
			.should('be.visible')
			.type(5);

		cy.get('.mr-32 > input')
			.should('be.visible')
			.type('2022-09-30');

		cy.get(
			'.flex.mb-32 > :nth-child(2) > input'
		)
			.should('be.visible')
			.type('2022-10-30');

		cy.get('.absolute > .btn')
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > span > .cursor-pointer'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(2)'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > span > .cursor-pointer'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(1)'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .slideInModal_modalContainer__Y9kIt > .slideInModal_children__Oplmj > :nth-child(3) > input'
		)
			.should('be.visible')
			.clear()
			.type(8);

		cy.get(
			'.promotions_tableRow__RVFPI > .slideInModal_modalContainer__Y9kIt > .absolute > .btn'
		)
			.should('be.visible')
			.click()
			.wait(3000);

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > span > .cursor-pointer'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(2)'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > span > .cursor-pointer'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(3)'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.promotions_tableRow__RVFPI > .grid > .deleteModal_card__Z_Kbi > .justify-between > .btn-danger'
		)
			.should('be.visible')
			.click();*/



			////////CATEGORY-BASED/////////
		/*cy.get('.mt-32 > .false')
			.should('be.visible')
			.click();

		cy.get('.justify-between > .btn')
			.should('be.visible')
			.click();

		cy.get(
			'.relative > .border-gray-line > span > img'
		)
			.should('be.visible')
			.click();

		cy.get(
			'.phoneInput_scrollDropdown__jdUIE > :nth-child(2)'
		)
			.should('be.visible')
			.click();

		cy.get(':nth-child(4) > input')
			.should('be.visible')
			.type('5');

		cy.get(
			'.phoneInput_scrollDropdown__jdUIE > .mb-16'
		)
			.should('be.visible')
			.click();

		cy.get('.mr-32 > input')
			.should('be.visible')
			.type('2022-10-01');

			cy.get('.justify-between.mb-32 > :nth-child(2) > input')
			.should('be.visible')
			.type('2022-10-30');

		

		cy.get('.bottom-0 > .btn')
			.should('be.visible')
			.click();

			cy.get(':nth-child(2) > .relative > span > .cursor-pointer')
			.should('be.visible')
			.click();


			cy.get(':nth-child(2) > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(2)')
			.should('be.visible')
			.click();

			cy.get(':nth-child(2) > .relative > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get(':nth-child(2) > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > #promo_edit')
			.should('be.visible')
			.click();


			cy.get(
				':nth-child(2) > .slideInModal_modalContainer__Y9kIt > .slideInModal_children__Oplmj > :nth-child(3) > input'
			)
				.should('be.visible')
				.clear()
				.type(8);

				cy.get(':nth-child(2) > .slideInModal_modalContainer__Y9kIt > .absolute > .btn')
			.should('be.visible')
			.click().wait(2000);


			cy.get('.promotions_tableRow2__NoZu7 > .relative > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.promotions_tableRow2__NoZu7 > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(2)')
			.should('be.visible')
			.click();

			cy.get('.promotions_tableRow2__NoZu7 > .relative > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.promotions_tableRow2__NoZu7 > .relative > :nth-child(2) > .promotions_dropdown__Z_9ZA > :nth-child(3)')
			.should('be.visible')
			.click();

			cy.get('.promotions_tableRow2__NoZu7 > .grid > .deleteModal_card__Z_Kbi > .justify-between > .btn-danger')
			.should('be.visible')
			.click();

			

			cy.get('.promotions_tableRow2__NoZu7 > .grid > .deleteModal_card__Z_Kbi > .justify-between > .btn-outline-dark')
			.should('be.visible')
			.click();
			

			cy.get('.pt-40')
			.should('be.visible')
			.click();*/

			////////SETTINGS/////////
			/*cy.get('.sidebar_sidebarContainer__boXKx > :nth-child(1) > :nth-child(2) > :nth-child(8) > .false > span > img')
			.should('be.visible')
			.click();


           ///////COMPANY PROFILE///////
			/*cy.get('.sidebar_sidebarContainer__boXKx > .settingsModal_modalContainer__ZLVJZ > [href="/settings/company-profile"]')
			.should('be.visible')
			.click();


			
			cy.get('.border-0')
			.should('be.visible')
			.clear()
			.type('8022453633');

			cy.get('.btn')
			.should('be.visible')
			.click();

			

			////////ADMIN PROFILE//////////
			cy.get('.false > .false')
			.should('be.visible')
			.click();

			cy.get('.flex-col > .false')
			.should('be.visible')
			.type('Steve');

			cy.get('.flex-col > .undefined')
			.should('be.visible')
			.type('redo@yopmail.com');

			cy.get('.border-0')
			.should('be.visible')
			.type('8065014616');

			cy.get('.btn')
			.should('be.visible')
			.click();*/



			/////TO START TESTING THE USERS SECTION////

			///THE SETTINGS CLASS ELEMENT///
			
			/* 

			cy.get('.sidebar_sidebarContainer__boXKx > .settingsModal_modalContainer__ZLVJZ > [href="/settings/users"]')
			.should('be.visible')
			.click();

			cy.get('.flex-col > .btn')
			.should('be.visible')
			.click();

			cy.get('.bulkInput_inputContainer__lHWQM')
			.should('be.visible')
			.type('redoa@yopmail.com');

			cy.get('.slideInModal_modalContainer__Y9kIt > .btn')
			.should('be.visible')
			.click().wait(4000);

			cy.get('.false > .false')
			.should('be.visible')
			.click();

			cy.get(':nth-child(2) > .btn')
			.should('be.visible')
			.click();

			cy.get('.bulkInput_inputContainer__lHWQM')
			.should('be.visible')
			.type('redoll@yopmail.com');

			cy.get('.slideInModal_modalContainer__Y9kIt > .btn')
			.should('be.visible')
			.click();

			cy.reload();

			cy.get('.false > .false')
			.should('be.visible')
			.click();


			cy.get(':nth-child(8) > .justify-end > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get(':nth-child(8) > .justify-end > :nth-child(2) > .users_dropdown__RYq9Q > :nth-child(2)')
			.should('be.visible')
			.click();

			cy.get(':nth-child(8) > .grid > .deleteModal_card__Z_Kbi > .justify-between > .btn-danger')
			.should('be.visible')
			.click().wait(3000);

			cy.get('.bg-gray-other > .mr-8')
			.should('be.visible')
			.click();

			cy.get('.users_tableRow__HiHHx > .justify-end > span > .cursor-pointer')
			.should('be.visible')
			.click();

			cy.get('.users_tableRow__HiHHx > .justify-end > :nth-child(2) > .users_dropdown__RYq9Q > :nth-child(1)')
			.should('be.visible')
			.click();

			cy.get('.users_tableRow__HiHHx > .grid > .assignRole_card__3kmU6 > .assignRole_usersContainer__pb5B2 > :nth-child(1)')
			.should('be.visible')
			.click().wait(2000);

			cy.get('.users_tableRow__HiHHx > .grid > .assignRole_card__3kmU6 > .btn')
			.should('be.visible')
			.click();*/


			/////////ROLES SECTION///////////
			/*cy.get('.sidebar_sidebarContainer__boXKx > .settingsModal_modalContainer__ZLVJZ > [href="/settings/roles"]')
			.should('be.visible')
			.click();

			cy.get('.btn > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 20px; height: 20px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img')
			.should('be.visible')
			.click();

			cy.get(':nth-child(1) > .undefined')
			.should('be.visible')
			.type('manager');

			cy.get('.slideInModal_children__Oplmj > :nth-child(2) > .undefined')
			.should('be.visible')
			.type('Manages all the affairs of the company and reports to the CEO');

			cy.get('.slideInModal_modalContainer__Y9kIt.slideInModal_open__T2nrr > .absolute > .btn')
			.should('be.visible')
			.click();

			cy.get(':nth-child(3) > .grid > :nth-child(1) > .checkbox-container > .flex')
			.should('be.visible')
			.click()
	  
			cy.get(':nth-child(3) > .grid > :nth-child(2) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(3) > .grid > :nth-child(3) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(3) > .grid > :nth-child(4) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(3) > .grid > :nth-child(5) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(3) > .grid > :nth-child(6) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(3) > .grid > :nth-child(7) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(3) > .grid > :nth-child(8) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(4) > .grid > :nth-child(5) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(4) > .grid > :nth-child(6) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(10) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(11) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get(':nth-child(6) > .grid > :nth-child(1) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get('.btn')
			.should('be.visible')
			.click().wait(3000);

			cy.get(':nth-child(12) > .relative > span > .cursor-pointer')
			.should('be.visible')
			.click()

			cy.get(':nth-child(12) > .relative > :nth-child(2) > .roles_dropdown__sMbXF > :nth-child(2)')
			.should('be.visible')
			.click()

			cy.get(':nth-child(2) > .checkbox-container > .flex')
			.should('be.visible')
			.click()

			cy.get('.assignRole_card__3kmU6 > .btn')
			.should('be.visible')
			.click().wait(3000)

			cy.get(':nth-child(12) > .relative > span > .cursor-pointer')
			.should('be.visible')
			.click()

			cy.get(':nth-child(12) > .relative > :nth-child(2) > .roles_dropdown__sMbXF > :nth-child(4)')
			.should('be.visible')
			.click()

			cy.get('.btn-danger')
			.should('be.visible')
			.click()*/


			/////////SUPPLIERS SECTION/////////
			

			/*cy.get('.sidebar_sidebarContainer__boXKx > .settingsModal_modalContainer__ZLVJZ > [href="/settings/suppliers"]')
			.should('be.visible')
			.click()

			cy.get('.btn > span > img')
			.should('be.visible')
			.click()

			cy.get('.slideInModal_children__Oplmj > :nth-child(1) > .false')
			.should('be.visible')
			.type('Emma')

			cy.get('.slideInModal_children__Oplmj > :nth-child(2) > .false')
			.should('be.visible')
			.type('Lagos')

			cy.get('.slideInModal_children__Oplmj > :nth-child(3) > .false')
			.should('be.visible')
			.type('Emma')

			cy.get('.ml-8 > .border-0')
			.should('be.visible')
			.type('8065014616')

			cy.get('.bulkInput_inputContainer__lHWQM')
			.should('be.visible')
			.type('handbags')

			cy.get('.absolute > .btn')
			.should('be.visible')
			.click()

			cy.get('.flex > .items-center > .relative > .flex > span > img')
			.should('be.visible')
			.click()

			cy.get('.suppliers_exportDropdown__GPhEv > .flex')
			.should('be.visible')
			.click()

			cy.get('.suppliers_tableRow__9deNR > .justify-end.relative > span > .cursor-pointer')
			.should('be.visible')
			.click()

			cy.get('.suppliers_tableRow__9deNR > .justify-end.relative > :nth-child(2) > .suppliers_dropdown__mQWj5 > #supplier_edit')
			.should('be.visible')
			.click()

			cy.get('.suppliers_tableRow__9deNR > .slideInModal_modalContainer__Y9kIt > .slideInModal_children__Oplmj > :nth-child(2) > .false')
			.should('be.visible')
			.clear()
			.type('Abuja')

			cy.get('.suppliers_tableRow__9deNR > .slideInModal_modalContainer__Y9kIt > .absolute > .btn')
			.should('be.visible')
			.click()

			cy.get('.suppliers_tableRow__9deNR > .slideInModal_modalContainer__Y9kIt > .slideInModal_modalHeader__yCPju > .cursor-pointer > span > img')
			.should('be.visible')
			.click()

			cy.get('.suppliers_tableRow__9deNR > .justify-end.relative > :nth-child(2) > .suppliers_dropdown__mQWj5 > :nth-child(2)')
			.should('be.visible')
			.click()

			cy.get('.suppliers_tableRow__9deNR > .grid > .deleteModal_card__Z_Kbi > .justify-between > .btn-danger')
			.should('be.visible')
			.click()*/

			

	}
);
