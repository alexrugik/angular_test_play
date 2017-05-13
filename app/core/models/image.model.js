import sha256 from 'js-sha256';

let id = Math.round(Math.random() * 1000);

export default class ImageModel {
    constructor(imageObject, uploadedUser) {
        this.id = id++;
        this.fileSize = imageObject.size;
        this.imageName = imageObject.name;
        this.url = imageObject.url;
        this.uploadedUser = uploadedUser;
        this.checksum = this.getCheckSum(this.fileSize);
    }

    getCheckSum(fileSize) {
        return sha256(fileSize);
    }
}