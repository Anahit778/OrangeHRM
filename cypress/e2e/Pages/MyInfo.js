import {infoTab} from "../Locators/MyInfoLocators";
import {getUserLocators} from "../Locators/MyInfoLocators";
import {editUserInfo} from "../Locators/MyInfoLocators";

class UserPage {
    openMyInfoSection() {

        cy.get(infoTab.myInfoSectionLocator).contains(infoTab.sectionName).click();
    }
    editPersonalDetails() {
        cy.get(getUserLocators.firstName).clear().type(editUserInfo.firstNameOption)
        cy.get(getUserLocators.middleName).clear().type(editUserInfo.middleNameOption)
        cy.get(getUserLocators.lastName).clear().type(editUserInfo.lastNameOption)
        cy.get(getUserLocators.gender).click({force: true})
        cy.get(getUserLocators.firstSaveButton).first().click();
        cy.get(getUserLocators.successMessageLocator)
            .should('be.visible').and('contain', 'Successfully Updated')

    }

    assertEditedData() {
        cy.get(getUserLocators.firstName).should('have.value', editUserInfo.firstNameOption)
        cy.get(getUserLocators.middleName).should('have.value', editUserInfo.middleNameOption)
        cy.get(getUserLocators.lastName).should('have.value', editUserInfo.lastNameOption)
        cy.get(getUserLocators.gender).should('have.value', '1')
    }

}



export default UserPage;


