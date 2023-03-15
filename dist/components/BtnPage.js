"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _react = _interopRequireDefault(require("react"));
/**
 * It is a function that takes an object as a prop and returns a BtnPage
 * @param {object} props  object to BtnPage
 * @param {number} props.value number that corresponds to the value of the button
 * @param {function} props.setCounter function that allows you to modify the value of the state counter
 * @param {object} props.counter object represents the number of pages, and the page currently viewed by the user
 * @param {array} props.counter.nbPage array that represents the number of pages available
 * @param {number} props.counter.actualPage number that represents which page the user is currently viewing
 * @param {string} props.styleName string, represents the class name of the button
 * @param {boolean} props.isDisabled bool, represents whether the button should be disabled or not
 * @param {number} props.increment number, represents if the button leads to a positive or negative increment
 * @return {JSX.Element} BtnPage
 */

var BtnPage = function BtnPage(_ref) {
  var value = _ref.value,
    setCounter = _ref.setCounter,
    counter = _ref.counter,
    styleName = _ref.styleName,
    isDisabled = _ref.isDisabled,
    increment = _ref.increment;
  return /*#__PURE__*/_react.default.createElement("button", {
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