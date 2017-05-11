class BlocksController {
    constructor() {

    }

    $onInit() {

    }
}

BlocksController.$inject = [];

export default angular.module('app.blocks', [])
    .component('blocks', {
        templateUrl: "app/blocks/blocks.template.html",
        controller: BlocksController,
        controllerAs: '$ctrl'
    })
    .name;
