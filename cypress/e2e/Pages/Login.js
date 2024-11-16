import {siteUrl} from "../Locators/LoginLocators";
import {loginLocators} from "../Locators/LoginLocators";
import {userCredentials} from "../Locators/LoginLocators";
import {userDashboard} from "../Locators/LoginLocators";

class LoginPage {
    open() {
        cy.visit(siteUrl.url);
    }

    login() {
        cy.get(loginLocators.userUsername).type(userCredentials.username)
        cy.get(loginLocators.userPassword).type(userCredentials.password)
        cy.get(loginLocators.submit).click()
    }
    loginIsSuccessful() {
        cy.get(userDashboard.topBarLocator).contains(userDashboard.topBarOptionName)
            .should('be.visible')
    }
}


export default LoginPage;