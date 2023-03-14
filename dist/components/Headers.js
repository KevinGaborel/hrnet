"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Row = _interopRequireDefault(require("./Row"));
var _react = _interopRequireDefault(require("react"));
var Headers = function Headers(_ref) {
  var type = _ref.type,
    columns = _ref.columns,
    setOrder = _ref.setOrder,
    order = _ref.order,
    rowData = _ref.rowData;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, type === 'thead' ? /*#__PURE__*/_react.default.createElement("thead", {
    key: type
  }, /*#__PURE__*/_react.default.createElement(_Row.default, {
    styleName: 'title-row',
    columns: columns,
    type: 'th',
    setOrder: setOrder,
    order: order
  })) : type === 'tbody' ? /*#__PURE__*/_react.default.createElement("tbody", {
    key: type
  }, rowData.map(function (cell, index) {
    return /*#__PURE__*/_react.default.createElement(_Row.default, {
      key: "row ".concat(index),
      columns: columns,
      type: 'td',
      cell: cell
    });
  })) : /*#__PURE__*/_react.default.createElement("tfoot", {
    key: type
  }));
};
var _default = Headers;
exports.default = _default;