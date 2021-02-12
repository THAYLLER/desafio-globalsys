"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateZipCodeServices = /** @class */ (function () {
    function CreateZipCodeServices(zipCodeRepository) {
        this.zipCodeRepository = zipCodeRepository;
    }
    CreateZipCodeServices.prototype.execute = function (_a) {
        var store_code = _a.store_code, start_track = _a.start_track, end_track = _a.end_track;
        var veryZipCode = this.zipCodeRepository.findZipCodeTrack(start_track, end_track);
        if (veryZipCode) {
            throw new Error('The starting or ending range of the zip already exists');
        }
        var zipcode_track = this.zipCodeRepository.create({ store_code: store_code, start_track: start_track, end_track: end_track });
        return zipcode_track;
    };
    return CreateZipCodeServices;
}());
exports.default = CreateZipCodeServices;
