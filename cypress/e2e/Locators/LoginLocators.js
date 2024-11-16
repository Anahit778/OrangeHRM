const siteUrl = {
    url: 'https://opensource-demo.orangehrmlive.com/ ',

}

const loginLocators = {
    userUsername: '[name="username"]',
    userPassword: '[type="password"]',
    submit: '[type="submit"]'

}
const userCredentials = {
    username: 'Admin',
    password: 'admin123'
};

const userDashboard = {
    topBarLocator: '.oxd-topbar',
    topBarOptionName: 'Dashboard'
}



export {siteUrl, loginLocators, userCredentials , userDashboard}