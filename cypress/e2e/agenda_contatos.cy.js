describe('Testes para Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';
    
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('input[name="name"]').type('João da Silva');
        cy.get('input[name="email"]').type('joao.silva@example.com');
        cy.get('input[name="phone"]').type('11999999999');
        cy.contains('button', 'Adicionar').click();

      // Verifica se o novo contato foi adicionado à lista
        cy.contains('João da Silva').should('exist');
        cy.contains('joao.silva@example.com').should('exist');
        cy.contains('11999999999').should('exist');
    });

    it('Deve editar um contato existente', () => {
      // Edita o contato João da Silva
        cy.contains('João da Silva').parent().contains('button', 'Editar').click();
        cy.get('input[name="name"]').clear().type('João da Silva Editado');
        cy.get('input[name="email"]').clear().type('joao.editado@example.com');
        cy.get('input[name="phone"]').clear().type('11888888888');
        cy.contains('button', 'Salvar').click();

      // Verifica se o contato foi editado
        cy.contains('João da Silva Editado').should('exist');
        cy.contains('joao.editado@example.com').should('exist');
        cy.contains('11888888888').should('exist');
    });

    it('Deve remover um contato', () => {
      // Remove o contato João da Silva Editado
        cy.contains('João da Silva Editado').parent().contains('button', 'Remover').click();

      // Verifica se o contato foi removido
        cy.contains('João da Silva Editado').should('not.exist');
    });
});