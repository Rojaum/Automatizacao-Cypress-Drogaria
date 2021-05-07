
Given(/^Que eu acesso ao site da drogaria Pague Menos para comprar de remedios$/, () => {
	cy.visit('https://www.paguemenos.com.br/')
});

When(/^Pesquiso o remedio dipirona$/, () => {


   cy.get('#downshift-1-input').type('dipirona')
   cy.get('body > div.render-container.render-route-store-home > div > div.vtex-store__template.bg-base > div > div:nth-child(1) > div.vtex-store-header-2-x-headerStickyRow.vtex-store-header-2-x-headerStickyRow--main-header-mobile.sticky.z-999 > div.vtex-store-header-2-x-headerRow.vtex-store-header-2-x-headerRow--main-header-mobile > div > section > div > div > div > div:nth-child(2) > div > div > div > section > section > ul > li:nth-child(1) > div > a > article > div.vtex-search-1-x-imageContainer.h3 > img').click()

  //  return true;
});

When(/^Adiciono 3 remedios$/, () => {

    cy.get(':nth-child(2) > .vtex-product-quantity-1-x-quantitySelectorContainer > .vtex-product-quantity-1-x-quantitySelectorStepper > .vtex-numeric-stepper-wrapper > .vtex-numeric-stepper-container > .vtex-numeric-stepper__plus-button-container > .vtex-numeric-stepper__plus-button > .vtex-numeric-stepper__plus-button__text').click().click()

});

When(/^Digito o CEP$/, () => {
	cy.get('.vtex-address-form-4-x-input').type('38440358')
    cy.get('.vtex-store-components-3-x-shippingContainer > .vtex-button > .vtex-button__label').click()
    cy.get(':nth-child(2) > .vtex-store-components-3-x-shippingTableCellDeliveryName > .vtex-store-components-3-x-shippingTableLabel > .vtex-store-components-3-x-shippingTableRadioBtn').click()


});

When(/^Adiciono o dipirona no carrinho de compras$/, () => {
	cy.get('.medicamentoControlado > .vtex-button').click()
});

When(/^Clico na cestinha de compras$/, () => {

    cy.get('body > div.render-container.render-route-store-product > div > div.vtex-store__template.bg-base > div > div > div > div.paguemenos-store-theme-2-x-headerStickyFixed--active-sticky.paguemenos-store-theme-2-x-headerStickyFixed > div > div.vtex-store-header-2-x-headerRow.vtex-store-header-2-x-headerRow--new-header-mobile.vtex-store-header-2-x-headerRow--new-header-mobile-fixed > div > section > div > aside > div > div').click()

});

When(/^Clico em finalizar pedido$/, () => {
    cy.get('#dm876A > .dp-bar-button').click()
	cy.get('#proceed-to-checkout > .vtex-button__label').click()
    //return true;
});

Then(/^Valido se o pedido retornou com sucesso$/, () => {
    cy.contains('Dipirona Sódica')

        cy.request({method: 'GET', url: 'https://pokeapi.co/api/v2/pokemon/1', body: {
        'url': 'TESTE AUTO API',
        'icon': 'ac_unit'
        },
        headers: {
        accept: 'application/json',
        },
        timeout: 50000
        }).then(xhr => {
        expect(xhr.status).to.equal(200)
        })
        

});
