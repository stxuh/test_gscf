/// <reference types="cypress" />
import XvzBankPage from "../pages/xvzBankPage";

const xvzBankPage = new XvzBankPage();

context("E2E - Administration view keyboard navigation", () => {
    beforeEach(() => {
        xvzBankPage.login(Cypress.env("login"));
    });

    it("Write a Cypress test in GitHub", () => {
        xvzBankPage.assertLogin(Cypress.env("login"))
            .deposit("100")
            .assertDeposit("100")
            .deposit("10")
            .assertDeposit("110")
            .deposit("5")
            .assertDeposit("115")
    });

});