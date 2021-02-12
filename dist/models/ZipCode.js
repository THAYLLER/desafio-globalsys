"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var ZipCode = /** @class */ (function () {
    function ZipCode(_a) {
        var store_code = _a.store_code, start_track = _a.start_track, end_track = _a.end_track;
        this.id = uuid_1.v4();
        this.store_code = store_code;
        this.start_track = start_track;
        this.end_track = end_track;
    }
    return ZipCode;
}());
exports.default = ZipCode;
