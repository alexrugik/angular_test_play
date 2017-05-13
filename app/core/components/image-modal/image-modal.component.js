import {ON_SHOW_MODAL} from '../../const/events.const';

class ImageModalController {
    constructor($scope) {
        this.addEventListeners($scope)
    }

    $onInit() {

    }

    $onDestroy() {
        this.this.offShowModal();
    }

    addEventListeners($scope) {
        this.offShowModal = $scope.$on(ON_SHOW_MODAL, this.showImage().bind(this));
    }

    showImage(event, data) {
        if (!data && !data.image) {
            return;
        }
        this.image = data.image;
    }
}

ImageModalController.$inject = ['$scope'];

export default angular.module('app.core.components.image-modal', [])
    .component('imageModal', {
        templateUrl: 'app/core/components/image-modal/image-modal.template.html',
        controller: ImageModalController,
        controllerAs: '$ctrl'
    })
    .name;