class HeaderController {
    constructor($state,
                authService) {
        this.$state = $state;
        this.authService = authService;
    }

    onLogOut() {
        this.authService.resetUserData();
        this.$state.go('auth.login');
    }
}

HeaderController.$inject = [
    '$state',
    'authService'
];

export default angular.module('app.core.components.header', [])
    .component('appHeader', {
        templateUrl: 'app/core/components/header/header.template.html',
        controller: HeaderController
    })
    .name;

