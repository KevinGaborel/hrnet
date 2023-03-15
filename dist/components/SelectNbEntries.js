"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _react = _interopRequireDefault(require("react"));
/**
 * It is a function that takes an object as a prop and returns a SelectNbEntries
 * @param {object} props  object to SelectNbEntries
 * @param {function} props.setTableLength function that allows you to modify the state, which will keep the number of rows in the table by pages
 * @param {function} props.setCounter function that allows you to modify the value of the state counter
 * @param {object} props.counter object represents the number of pages, and the page currently viewed by the user
 * @param {array} props.counter.nbPage array that represents the number of pages available
 * @param {number} props.counter.actualPage number that represents which page the user is currently viewing
 * @return {JSX.Element} SelectNbEntries
 */

var SelectNbEntries = function SelectNbEntries(_ref) {
  var setTableLength = _ref.setTableLength,
    setCounter = _ref.setCounter,
    counter = _ref.counter;
  var handleChange = function handleChange(e) {
    setTableLength(e.target.value);
    setCounter((0, _objectSpread2.default)((0, _objectSpread2.default)({}, counter), {}, {
      actualPage: 1
    }));
  };
  return /*#__PURE__*/_react.default.createElement("label", null, 'Show ', /*#__PURE__*/_react.default.createElement("select", {
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: "100"
  }, "100")), ' entries');
};
var _default = SelectNbEntries;
exports.default = _default;