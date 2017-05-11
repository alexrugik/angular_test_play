import sha256 from 'js-sha256';

let id = 0;

export default class ImageModel {
    constructor(imageObject, uploadedUser) {
        this.id = id++;
        this.fileSize = imageObject.size;
        this.imageName = imageObject.name;
        this.uploadedUser = uploadedUser;
        this.checksum = this.getCheckSum(this.fileSize);
    }

    getCheckSum(fileSize) {
        return sha256(fileSize);
    }
}