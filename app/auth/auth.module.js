import LoginComponent from './login/login.component';
import AuthRoute from './auth.route';
import AuthService from './auth.service';

export default angular.module('app.auth', [
    LoginComponent,
    AuthRoute
])
    .service('authService', AuthService)
    .name;
