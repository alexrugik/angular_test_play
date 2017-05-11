import {ON_IMAGE_LOADED} from '../../const/events.const';

const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jfif'];

export default class DragAndDropDirective {
    constructor() {
        this.restrict = 'A';
    }

    link(scope, element) {
        element.bind('dragenter', event => {
            event.preventDefault();
            event.stopPropagation();
        });

        element.bind('dragover', event => {
            event.preventDefault();
            event.stopPropagation();
        });

        element.bind('drop', (event) => {
            event.preventDefault();
            event.stopPropagation();

            let images = Array.from(event.dataTransfer.files);
            this.filterByAllowedTypes(images).forEach(image => {
                this.getImage(image, scope);
            });
        });
    }

    filterByAllowedTypes(images) {
        return images.filter(image => {
            return ALLOWED_IMAGE_TYPES.some(type => type === image.type);
        });
    }

    getImage(image, scope) {
        const fileReader = new FileReader();
        fileReader.onload = event => {
            image.url = event.target.result;
            scope.$apply(scope.$emit(ON_IMAGE_LOADED, image));
        };
        fileReader.readAsDataURL(image);
    }
}
