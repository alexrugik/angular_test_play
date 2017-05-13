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

    resetLocalStorageData() {
        delete this.$localStorage.loggedUser;
        return this;
    }

    resetUserData() {
        this.resetLocalStorageData();
        this.__loggedUser = false;
    }

    getLoggedUserSpaceName() {
        return this.getLoggedUser().email;
    }
}

AuthService.$inject = ['$localStorage'];