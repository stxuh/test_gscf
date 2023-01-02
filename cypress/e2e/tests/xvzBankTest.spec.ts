/// <reference types="cypress" />
import XvzBankPage from "../pages/xvzBankPage";

const xvzBankPage = new XvzBankPage();

context("XvzBank test", () => {
    beforeEach(() => {
        xvzBankPage.login(Cypress.env("login"));
    });

    it("Test deposit", () => {
        xvzBankPage.assertLogin(Cypress.env("login"))
            .deposit("100")
            .assertDeposit("100")
            .deposit("10")
            .assertDeposit("110")
            .deposit("5")
            .assertDeposit("115")
    });

});