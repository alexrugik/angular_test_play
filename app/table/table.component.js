class TableController {
    constructor(imageService) {
        this.imageService = imageService;
    }

    $onInit() {

    }

    onRemoveImage(image) {
        this.imageService.removeImage(image);
    }
}

TableController.$inject = ['imageService'];

export default angular.module('app.table', [])
    .component('table', {
        templateUrl: "app/table/table.template.html",
        controller: TableController,
        controllerAs: '$ctrl'
    })
    .name;
