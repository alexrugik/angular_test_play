import CoreComponents from './components/index';
import CoreServices from './services/index';
import CoreDirectives from './directives/index';

export default  angular.module('app.core', [
    CoreComponents,
    CoreServices,
    CoreDirectives
])
    .name;
