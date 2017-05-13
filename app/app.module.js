import styles from './assets/assets.module';
import AuthModule from './modules/auth/auth.module';
import CoreModule from './core/core.module';
import AppRun from './app.run';
import AppRoute from './app.route';
import AppConfig from './app.config';
import TableComponent from './modules/table/table.component';
import BlocksComponent from './modules/blocks/blocks.component';
import UploaderComponent from './modules/uploader/uploader.component';

angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'ngStorage',
    AppConfig,
    AppRun,
    AppRoute,
    AuthModule,
    CoreModule,
    TableComponent,
    BlocksComponent,
    UploaderComponent
]);
