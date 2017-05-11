import FooterService from './footer.service';

class FooterController {
    constructor(footerService) {
        this.footerService = footerService;
    }
}

FooterController.$inject = ['footerService'];

export default angular.module('app.core.components.footer', [])
    .component('appFooter', {
        templateUrl: 'app/core/components/footer/footer.template.html',
        controller: FooterController
    })
    .service('footerService', FooterService)
    .name;


