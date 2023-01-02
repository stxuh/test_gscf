/// <reference types="Cypress" />

class XvzBankPage {
    login(username: string) {
        cy.visit("/");
        cy.contains("Customer Login").click();
        cy.get("#userSelect").select(username);
        cy.get("button[type='submit']").click();
        return this;
    }

    assertLogin(username: string) {
        cy.get("strong span").contains(username);
        return this;
    }

    deposit(sum: string) {
        cy.contains("Deposit").click();
        cy.get("input[placeholder='amount']").type(sum);
        cy.get("button[type='submit']").click();
        return this;
    }

    assertDeposit(sum: string) {
        cy.get(".error[ng-show='message']").contains("Deposit Successful");
        cy.get("div strong:nth-child(2)").contains(sum);
        return this;
    }
}

export default XvzBankPage;
