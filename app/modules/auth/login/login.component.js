class Login {
    constructor($state,
                $http,
                authService) {
        this.$state = $state;
        this.$http = $http;
        this.authService = authService;
    }

    $onInit() {
        this.userForm = {
            email: '',
            password: '',
        };
    }

    onLogin() {
        this.getUsers()
            .then(response => {
                const users = response.data.users;
                return users.find(user => {
                    return user.email === this.userForm.email && user.email === this.userForm.email;
                });
            })
            .then(user => {
                this.authService.addLoggedUser(user);
                if (this.authService.isAuthorized()) {
                    this.$state.go('app.table');
                }
            });
    }

    getUsers() {
        return this.$http.get('./app/auth/users.json');
    }
}

export default  angular.module('app.auth.login', [])
    .component('login', {
        templateUrl: 'app/modules/auth/login/login.template.html',
        controller: Login,
        controllerAs: '$ctrl'
    })
    .name;

Login.$inject = [
    '$state',
    '$http',
    'authService'
];

