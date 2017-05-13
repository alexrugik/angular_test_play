export default class AuthService {
    constructor($localStorage) {
        this.$localStorage = $localStorage;
        this.__loggedUser = false;
        this.restoreUserFromLocalStorage();
    }

    getLoggedUser() {
        return this.__loggedUser;
    }

    setLoggedUser(user) {
        if (!user && typeof(user) !== 'object') {
            throw new Error('no user for setLoggedUser');
        }
        this.__loggedUser = user;
        return this;
    }

    addLoggedUser(user) {
        this.setLoggedUser(user)
            .saveToLocalStorage();
    }

    isAuthorized() {
        return !!this.getLoggedUser();
    }

    resetUserData() {
        this.removeUserFromLocalStorage();
        this.__loggedUser = false;
    }

    getLoggedUserSpaceName() {
        return this.getLoggedUser().email;
    }

    restoreUserFromLocalStorage() {
        if (!this.$localStorage.loggedUser) {
            return;
        }
        this.setLoggedUser(this.$localStorage.loggedUser);
    }

    saveToLocalStorage() {
        this.$localStorage.loggedUser = this.getLoggedUser();
        return this;
    }

    removeUserFromLocalStorage() {
        delete this.$localStorage.loggedUser;
        return this;
    }
}

AuthService.$inject = ['$localStorage'];