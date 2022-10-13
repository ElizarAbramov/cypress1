
it("Should open the main page", () => {
    cy.visit("/");
    cy.contains("Books list");
});

it("Should log in successfully", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("test@test.com").should("be.visible");
    cy.contains("Add new").should("have.class", "btn");
});

it("Should not log in successfully with wrong password", () => {
    cy.visit("/");
    cy.login("test@test.com");
    cy.get("#pass").then(($el) => $el[0].checkValidity()).should("be.false");
});

it("Should add a book to favourite", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.addToFav("Misery", "my favourite horror", "Stephen King");
});


it("Should delete a book from favourite", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Favorites").click();
    cy.contains("Misery").should("be.visible");
    cy.get("button.btn.btn-secondary").eq(0).click();
    cy.contains("Misery").should("not.exist");
});

it("Should have download button", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.addToFav("Misery", "my favourite horror", "Stephen King");
    cy.get("a:nth-child(1) > div > div.card-body").click();
    cy.contains("Dowload book");
});