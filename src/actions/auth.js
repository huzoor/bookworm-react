export const login = (credentials) => () => 
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));