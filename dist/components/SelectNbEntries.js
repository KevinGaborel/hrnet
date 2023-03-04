"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
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
  return /*#__PURE__*/React.createElement("label", null, 'Show ', /*#__PURE__*/React.createElement("select", {
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "100"
  }, "100")), ' entries');
};
var _default = SelectNbEntries;
exports.default = _default;