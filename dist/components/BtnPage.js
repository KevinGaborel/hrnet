"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var BtnPage = function BtnPage(_ref) {
  var value = _ref.value,
    setCounter = _ref.setCounter,
    counter = _ref.counter,
    styleName = _ref.styleName,
    isDisabled = _ref.isDisabled,
    increment = _ref.increment;
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCounter((0, _objectSpread2.default)((0, _objectSpread2.default)({}, counter), {}, {
        actualPage: typeof value === 'number' ? value : counter.actualPage + increment
      }));
    },
    className: styleName,
    disabled: isDisabled && true
  }, value);
};
var _default = BtnPage;
exports.default = _default;