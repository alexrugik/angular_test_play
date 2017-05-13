class BlocksController {
    constructor(imageService) {
        this.imageService = imageService;
    }

    $onInit() {

    }
}

BlocksController.$inject = ['imageService'];

export default angular.module('app.blocks', [])
    .component('blocks', {
        templateUrl: "app/modules/blocks/blocks.template.html",
        controller: BlocksController,
        controllerAs: '$ctrl'
    })
    .name;
