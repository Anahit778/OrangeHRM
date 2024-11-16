import LoginPage from "../Pages/Login";
import UserPage from "../Pages/MyInfo";



describe('Test', () => {
    it('LoginPage', () => {
            const loginPage = new LoginPage()
            const userPage = new UserPage()
            loginPage.open()
            loginPage.login()
            loginPage.loginIsSuccessful()

            userPage.openMyInfoSection()
            userPage.editPersonalDetails()
            userPage.assertEditedData()
        }
    )
})