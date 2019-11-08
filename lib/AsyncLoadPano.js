"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPano = exports.AsyncLoadPano = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isLoader = false;
var krpanoJS = null;
var musicBg = null;
var musicExplain = null;

var loadPano =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(callback) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isLoader) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", Promise.resolve({
              krpanoJS: krpanoJS,
              musicBg: musicBg,
              musicExplain: musicExplain
            }));

          case 2:
            _context.next = 4;
            return (0, _utils.importCDN)("http://test.res.jsvry.com/krpano/tour.js", "krpanoJS").then(function (re) {
              krpanoJS = re;
              isLoader = true;
              musicBg = (0, _utils.importAudio)('musicBg');
              musicExplain = (0, _utils.importAudio)('musicExplain');
              return Promise.resolve({
                krpanoJS: krpanoJS,
                musicBg: musicBg,
                musicExplain: musicExplain
              });
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadPano(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.loadPano = loadPano;

var AsyncLoadPano =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AsyncLoadPano, _React$Component);

  function AsyncLoadPano() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AsyncLoadPano);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AsyncLoadPano)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: !isLoader
    };
    return _this;
  }

  _createClass(AsyncLoadPano, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var KR;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return loadPano();

              case 2:
                KR = _context2.sent;
                requestAnimationFrame(function () {
                  _this2.setState({
                    loading: false
                  });
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          renderLoading = _this$props.renderLoading;
      var loading = this.state.loading;

      if (!loading) {
        return children;
      }

      return renderLoading;
    }
  }]);

  return AsyncLoadPano;
}(_react.default.Component);

exports.AsyncLoadPano = AsyncLoadPano;
AsyncLoadPano.defaultProps = {
  renderLoading: _react.default.createElement("div", null, "loading...")
};