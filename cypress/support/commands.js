Cypress.Commands.add("accessSearchButton", () => {
    cy.get('button[id="search-open"]').should('exist').click();
})

Cypress.Commands.add("searchArticleByWord", (word) => {
    cy.accessSearchButton();
    cy.get('input[class="search-field"]').eq(0).should('exist').click().type(word);
    cy.get('input[class="search-submit"]').eq(0).should('exist').click();
})

Cypress.Commands.add("checkResults", (word) => {
    cy.get('h1[class="archive-title"]').should("have.text","Resultados da busca por: " + word);
})

Cypress.Commands.add("checkArticle", (word) => {
    cy.get('h2[class="entry-title"] > a').eq(0).click({force : true});
    cy.get('div[id="entry-content"]').contains(word, {matchCase: false});
})

Cypress.Commands.add("checkNoResults", () => {
    cy.get('h1[class="entry-title"]').should("have.text","Nenhum resultado");
})

Cypress.Commands.add("checkArticleTitle", (word) => {
    cy.get('h1[class="archive-title"]').should("have.text","Resultados da busca por: " + word);
    cy.get('a[rel="bookmark"]').eq(0).contains(word, {matchCase: false});
})