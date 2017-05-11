class ImagesController {
    constructor() {

    }

    $onInit() {
    }
}

ImagesController.$inject = [];

export default angular.module('app.core.components.images', [])
    .component('imageList', {
        templateUrl: 'app/core/components/images/images.template.html',
        controller: ImagesController,
        controllerAs: '$ctrl',
        bindings: {
            images: '<'
        }
    })
    .name;