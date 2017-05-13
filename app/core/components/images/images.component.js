class ImagesController {
    constructor(imageService) {
        this.imageService = imageService;
    }

    $onInit() {
    }

    onRemoveImage(image) {
        if (typeof(image.id) === 'number') {
            this.imageService.removeImage(image);
            return;
        }
        const index = this.images.findIndex(img => img.id === image.id);
        this.images.splice(index, 1);
    }
}

ImagesController.$inject = ['imageService'];

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