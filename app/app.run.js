import {AUTH_STATES} from './core/const/states.const';

function Run($rootScope,
             $state,
             authService) {

    $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams) => {
        });

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
        if (!authService.isAuthorized() && toState.name !== AUTH_STATES.AUTH_LOGIN) {
            $state.go(AUTH_STATES.AUTH_LOGIN);
            event.preventDefault();
        }
    });

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams) => {
    });
}

Run.$inject = [
    '$rootScope',
    '$state',
    'authService'
];

export default angular.module('app.run', [])
    .run(Run)
    .name;