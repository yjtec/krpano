"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AsyncLoadPano", {
  enumerable: true,
  get: function get() {
    return _AsyncLoadPano.AsyncLoadPano;
  }
});
Object.defineProperty(exports, "loadPano", {
  enumerable: true,
  get: function get() {
    return _AsyncLoadPano.loadPano;
  }
});
exports.default = void 0;

var _AsyncLoadPano = require("./AsyncLoadPano");

var _Pano = _interopRequireDefault(require("./Pano"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Pano.default;
exports.default = _default;