class ImagesController {
    constructor() {
    }

    $onInit() {
    }

    onRemoveImage(img) {
        const index = this.images.findIndex(image => image.id === img.id);
        this.images.splice(index, 1);
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