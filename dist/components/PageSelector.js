"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _BtnPage = _interopRequireDefault(require("./BtnPage"));
var _react = _interopRequireDefault(require("react"));
var PageSelector = function PageSelector(_ref) {
  var counter = _ref.counter,
    setCounter = _ref.setCounter;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_BtnPage.default, {
    value: 'Prev',
    styleName: counter.actualPage > 1 ? 'btn-page-alpha' : 'btn-page-alpha btn-page-disabled',
    isDisabled: counter.actualPage === 1 && true,
    setCounter: setCounter,
    counter: counter,
    increment: -1
  }), counter.nbPage.map(function (value, index) {
    return /*#__PURE__*/_react.default.createElement(_BtnPage.default, {
      key: "btn ".concat(index),
      value: index + 1,
      setCounter: setCounter,
      counter: counter,
      styleName: index + 1 !== counter.actualPage ? 'btn-page-num' : 'btn-page-num btn-page-active'
    });
  }), /*#__PURE__*/_react.default.createElement(_BtnPage.default, {
    value: 'Next',
    styleName: counter.actualPage !== counter.nbPage.length ? 'btn-page-alpha' : 'btn-page-alpha btn-page-disabled',
    isDisabled: counter.actualPage === counter.nbPage.length && true,
    setCounter: setCounter,
    counter: counter,
    increment: 1
  }));
};
var _default = PageSelector;
exports.default = _default;