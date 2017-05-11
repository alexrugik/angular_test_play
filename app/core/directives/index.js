import DragAndDropImageDirective from './drag-and-drop-image/drag-and-drop-image.directive';

export default angular.module('app.core.directives', [])
    .directive('dropzone', () => new DragAndDropImageDirective())
    .name;