"use strict";
exports.__esModule = true;
// Modules
// ------------------------------------- //
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this._x + ', y: ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
