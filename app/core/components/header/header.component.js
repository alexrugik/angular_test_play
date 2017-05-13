class HeaderController {
    constructor($state,
                authService,
                imageService) {
        this.$state = $state;
        this.authService = authService;
        this.imageService = imageService;
    }

    onLogOut() {
        this.authService.resetUserData();
        this.imageService.removeImages();
        this.$state.go('auth.login');
    }
}

HeaderController.$inject = [
    '$state',
    'authService',
    'imageService'
];

export default angular.module('app.core.components.header', [])
    .component('appHeader', {
        templateUrl: 'app/core/components/header/header.template.html',
        controller: HeaderController
    })
    .name;

