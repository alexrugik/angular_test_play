export default class ImageService {
    constructor($localStorage,
                authService) {
        this.$localStorage = $localStorage;
        this.authService = authService;
        this.__images = [];
        this.restoreImagesFromLocalStorage();
    }

    getImages() {
        return this.__images;
    }

    addImage(image) {
        if (!image) {
            throw  new Error('no image in addImage!');
        }
        this.getImages().push(image);
        this.saveImagesToLocalStorage();
    }

    addImages(images) {
        if (!images && !images.push) {
            throw new Error('no array of images in setImages!');
        }
        this.getImages().push(...images);
        this.saveImagesToLocalStorage();
    }

    removeImage(image) {
        if (!image) {
            throw new Error('no image in removeImage!');
        }
        const index = this.getImages().findIndex(img => img.id === image.id);
        if (index === -1) {
            return;
        }
        this.getImages().splice(index, 1);
        this.saveImagesToLocalStorage();
    }

    saveImagesToLocalStorage() {
        this.$localStorage[this.authService.getLoggedUserSpaceName()] = this.getImages();
    }

    restoreImagesFromLocalStorage() {
        if (!this.$localStorage[this.authService.getLoggedUserSpaceName()]) {
            return;
        }
        this.__images.push(...this.$localStorage[this.authService.getLoggedUserSpaceName()]);
    }
}

ImageService.$inject = [
    '$localStorage',
    'authService'
];