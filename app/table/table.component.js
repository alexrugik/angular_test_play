import {ON_SHOW_MODAL} from '../core/const/events.const';

class TableController {
    constructor($scope,
                imageService) {
        this.$scope = $scope;
        this.imageService = imageService;
    }

    $onInit() {

    }

    onRemoveImage(image) {
        this.imageService.removeImage(image);
    }

    onShowModal(image) {
        this.$scope.$broadcast(ON_SHOW_MODAL, {image})
    }
}

TableController.$inject = [
    '$scope',
    'imageService'
];

export default angular.module('app.table', [])
    .component('table', {
        templateUrl: "app/table/table.template.html",
        controller: TableController,
        controllerAs: '$ctrl'
    })
    .name;
