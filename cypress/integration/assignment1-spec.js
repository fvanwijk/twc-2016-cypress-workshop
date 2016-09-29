describe('Filling in a form and submit', () => {

  beforeEach(function(){
    cy.visit('assignments/1')
  });

  it('cy.type() - type into a DOM element', function() {

    // https://on.cypress.io/api/type
    cy
      .get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
      .clear()
      .type('slow.typing@email.com', { delay: 100 })
      .should('have.value', 'slow.typing@email.com')

      .get('.action-disabled')
      .type('disabled error checking', {force: true})
      .should('have.value', 'disabled error checking')


      .get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get('.action-radios [type="radio"]').check('radio1').should('be.checked')
      .get('.action-select').select('fr-bananas')

      .get('.action-labels>.label').click({multiple: true})

      .get('.action-opacity>.btn').click({force: true})

  });
});
