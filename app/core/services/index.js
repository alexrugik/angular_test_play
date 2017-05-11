import ImageService from './images.service';

export default angular.module('app.core.services', [])
    .service('imageService', ImageService)
    .name;