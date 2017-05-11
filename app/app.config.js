export default angular.module('app.config', [])
    .config(Config)
    .name;

Config.$inject = [
    '$urlRouterProvider',
    '$locationProvider',
];

function Config($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/login');
}
