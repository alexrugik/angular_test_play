import {APP_STATES} from './core/const/states.const';

export default angular.module('app.route', [])
    .config(Route)
    .name;

Route.$inject = ['$stateProvider'];

function Route($stateProvider) {
    $stateProvider
        .state(APP_STATES.APP, {
            abstract: true,
            views: {
                header: { template: '<app-header></app-header>' },
                footer: { template: '<app-footer></app-footer>' },
                '': { template: '<div ui-view></div>' }
            }
        })
        .state(APP_STATES.APP_TABLE, {
            url: '/table',
            template: '<table></table>'
        })
        .state(APP_STATES.APP_BLOCKS, {
            url: '/blocks',
            template: '<blocks></blocks>'
        })
        .state(APP_STATES.APP_UPLOAD, {
            url: '/upload-image',
            template: '<uploader></uploader>'
        })
}

