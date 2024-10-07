describe('Testes para Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';
    
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('Deve adicionar um novo contato - Gian Souza', () => {
        cy.get('input[name="name"]').type('Gian Souza');
        cy.get('input[name="email"]').type('gian@ebac.com.br');
        cy.get('input[name="phone"]').type('11912345678');
        cy.contains('button', 'Adicionar').click();

      // Verifica se o novo contato foi adicionado à lista
        cy.contains('Gian Souza').should('exist');
        cy.contains('gian@ebac.com.br').should('exist');
        cy.contains('11912345678').should('exist');
    });

    it('Deve adicionar um novo contato - Bruna Costa', () => {
        cy.get('input[name="name"]').type('Bruna Costa');
        cy.get('input[name="email"]').type('brunca.costa@ebac.com.br');
        cy.get('input[name="phone"]').type('15932635178');
        cy.contains('button', 'Adicionar').click();

      // Verifica se o novo contato foi adicionado à lista
        cy.contains('Bruna Costa').should('exist');
        cy.contains('brunca.costa@ebac.com.br').should('exist');
        cy.contains('15932635178').should('exist');
    });

    it('Deve adicionar um novo contato - Felice Lacerda', () => {
        cy.get('input[name="name"]').type('Felice Lacerda');
        cy.get('input[name="email"]').type('felipe.lacerda@gmail.com');
        cy.get('input[name="phone"]').type('11935730078');
        cy.contains('button', 'Adicionar').click();

      // Verifica se o novo contato foi adicionado à lista
        cy.contains('Felice Lacerda').should('exist');
        cy.contains('felipe.lacerda@gmail.com').should('exist');
        cy.contains('11935730078').should('exist');
    });

    it('Deve editar um contato existente - Gian Souza', () => {
      // Edita o contato Gian Souza
        cy.contains('Gian Souza').parent().contains('button', 'Editar').click();
        cy.get('input[name="name"]').clear().type('Gian Souza Editado');
        cy.get('input[name="email"]').clear().type('gian.editado@ebac.com.br');
        cy.get('input[name="phone"]').clear().type('11888888888');
        cy.contains('button', 'Salvar').click();

      // Verifica se o contato foi editado
        cy.contains('Gian Souza Editado').should('exist');
        cy.contains('gian.editado@ebac.com.br').should('exist');
        cy.contains('11888888888').should('exist');
    });

    it('Deve remover um contato - Bruna Costa', () => {
      // Remove o contato Bruna Costa
        cy.contains('Bruna Costa').parent().contains('button', 'Remover').click();

      // Verifica se o contato foi removido
        cy.contains('Bruna Costa').should('not.exist');
    });
});