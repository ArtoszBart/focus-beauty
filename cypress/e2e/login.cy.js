describe('Login', () => {
	it('should show login error', () => {
		cy.visit('http://localhost:3000/admin');
		cy.get('#email').type('a@b.pl');
		cy.get('#password').type('asd');
		cy.get("button[type='submit']").click();
		cy.get('#error').should('not.be.empty');
	});
	it('should allow admin to log in', () => {
		cy.visit('http://localhost:3000/admin');
		cy.get('#email').type('a@b.pl');
		cy.get('#password').type('qwe');
		cy.get("button[type='submit']").click();
		cy.get('#welcome-screen').contains('Logged in!').should('be.visible');
	});
});
