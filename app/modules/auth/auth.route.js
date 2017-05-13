import {AUTH_STATES} from '../../core/const/states.const';

export default angular.module('app.auth.route', [])
    .config(Route)
    .name;

Route.$inject = ['$stateProvider'];

function Route($stateProvider) {
    $stateProvider
        .state(AUTH_STATES.AUTH, {
            url: '/auth',
            abstract: true,
            views: {
                header: { template: '' },
                footer: { template: '' },
                '': { template: '<div ui-view></div>' }
            }
        })
        .state(AUTH_STATES.AUTH_LOGIN, {
            url: '^/login',
            template: '<login></login>'
        })
}

