export default class ImageService {
    constructor($localStorage,
                authService) {
        window.image = this;
        this.$localStorage = $localStorage;
        this.authService = authService;
        this.__images = [];
    }

    getImages() {
        return this.__images;
    }

    addImage(image) {
        if (!image) {
            throw  new Error('no image in addImage');
        }
        this.__images.push(image);
        this.saveImagesToLocalStorage();
    }

    addImages(images) {
        if (!images && !images.push) {
            throw new Error('no array of images in setImages!');
        }
        this.__images.push(...images);
        this.saveImagesToLocalStorage();
    }

    saveImagesToLocalStorage() {
        this.$localStorage[this.authService.getLoggedUserSpaceName()] = this.getImages();
    }
}

ImageService.$inject = [
    '$localStorage',
    'authService'
];