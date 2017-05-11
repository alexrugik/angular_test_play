class TableController {
    constructor() {

    }

    $onInit() {

    }
}

TableController.$inject = [];

export default angular.module('app.table', [])
    .component('table', {
        templateUrl: "app/table/table.template.html",
        controller: TableController,
        controllerAs: '$ctrl'
    })
    .name;
