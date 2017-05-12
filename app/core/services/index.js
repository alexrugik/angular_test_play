import ImageService from './image.service';

export default angular.module('app.core.services', [])
    .service('imageService', ImageService)
    .name;