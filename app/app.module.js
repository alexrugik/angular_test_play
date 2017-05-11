import styles from '../assets/assets.module';
import AuthModule from './auth/auth.module';
import CoreModule from './core/core.module';
import AppRun from './app.run';
import AppRoute from './app.route';
import AppConfig from './app.config';
import TableComponent from './table/table.component';
import BlocksComponent from './blocks/blocks.component';
import UploaderComponent from './uploader/uploader.component';

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
