import {ON_IMAGE_LOADED} from '../../core/const/events.const';
import ImageModel from '../../core/models/image.model';

class UploaderController {
    constructor($scope,
                imageService,
                authService) {
        this.imageService = imageService;
        this.authService = authService;
        this.addEventListeners($scope);
    }

    $onInit() {
        this.images = [];
    }

    $onDestroy() {
        this.offImageLoaded();
    }

    addEventListeners($scope) {
        this.offImageLoaded = $scope.$on(ON_IMAGE_LOADED, this.onLoadImage.bind(this));
    }

    onLoadImage(event, image) {
        this.images.push(image);
    }

    onSaveImages() {
        this.images.forEach(image => {
            this.imageService.addImage(this.createImageModel(image));
        });
        this.onClearImages();
    }

    onClearImages() {
        this.images.length = 0;
    }

    createImageModel(image) {
        return new ImageModel(image, this.authService.getLoggedUser());
    }

    isShowButtonBlock() {
        return this.images.length > 0;
    }
}

UploaderController.$inject = [
    '$scope',
    'imageService',
    'authService'
];

export default angular.module('app.uploader', [])
    .component('uploader', {
        templateUrl: "app/modules/uploader/uploader.template.html",
        controller: UploaderController,
        controllerAs: '$ctrl'
    })
    .name;
