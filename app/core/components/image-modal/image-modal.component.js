import {ON_SHOW_MODAL} from '../../const/events.const';

class ImageModalController {
    constructor($scope) {
        this.addEventListeners($scope)
    }

    $onInit() {
        this.modalIsShowed = false;
    }

    $onDestroy() {
        this.this.offShowModal();
    }

    addEventListeners($scope) {
        this.offShowModal = $scope.$on(ON_SHOW_MODAL, this.showModal.bind(this));
    }

    showModal(event, data) {
        if (!data) {
            throw new Error('no data in showModal!');
        }
        this.modalIsShowed = true;
        this.setImage(data.image);
    }

    setImage(image) {
        if (!image && !image.image) {
            return;
        }
        this.image = image.image;
    }

    onCloseModal() {
        this.modalIsShowed = false;
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