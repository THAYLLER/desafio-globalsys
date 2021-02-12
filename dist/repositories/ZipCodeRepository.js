"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCode_1 = __importDefault(require("../models/ZipCode"));
var ZipCodeRepository = /** @class */ (function () {
    function ZipCodeRepository() {
        this.zipCode = [];
    }
    ZipCodeRepository.prototype.findAll = function () {
        return this.zipCode;
    };
    ZipCodeRepository.prototype.findZipCodeTrack = function (start_track, end_track) {
        var r = this.zipCode.find(function (zipcodes) {
            if (start_track == zipcodes.start_track || end_track == zipcodes.end_track) {
                return zipcodes;
            }
        });
        return r;
    };
    ZipCodeRepository.prototype.findZipCode = function (zipCode) {
        return this.zipCode.find(function (zipcodes) {
            if (zipCode >= zipcodes.start_track || zipCode <= zipcodes.end_track) {
                return zipcodes;
            }
        });
    };
    ZipCodeRepository.prototype.create = function (_a) {
        var store_code = _a.store_code, start_track = _a.start_track, end_track = _a.end_track;
        var zipcode_track = new ZipCode_1.default({ store_code: store_code, start_track: start_track, end_track: end_track });
        this.zipCode.push(zipcode_track);
        return zipcode_track;
    };
    ZipCodeRepository.prototype.update = function (id, _a) {
        var store_code = _a.store_code, start_track = _a.start_track, end_track = _a.end_track;
        var i = this.zipCode.findIndex(function (zipCode) { return zipCode.id === id; });
        this.zipCode[i].store_code = store_code;
        this.zipCode[i].start_track = start_track;
        this.zipCode[i].end_track = end_track;
        return this.zipCode[i];
    };
    ZipCodeRepository.prototype.delete = function (id) {
        var i = this.zipCode.findIndex(function (zipCode) { return zipCode.id === id; });
        this.zipCode.splice(i, 1);
        return this.zipCode;
    };
    return ZipCodeRepository;
}());
exports.default = ZipCodeRepository;
