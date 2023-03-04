"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Row = _interopRequireDefault(require("./Row"));
var Headers = function Headers(_ref) {
  var type = _ref.type,
    columns = _ref.columns,
    setOrder = _ref.setOrder,
    order = _ref.order,
    rowData = _ref.rowData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, type === 'thead' ? /*#__PURE__*/React.createElement("thead", {
    key: type
  }, /*#__PURE__*/React.createElement(_Row.default, {
    styleName: 'title-row',
    columns: columns,
    type: 'th',
    setOrder: setOrder,
    order: order
  })) : type === 'tbody' ? /*#__PURE__*/React.createElement("tbody", {
    key: type
  }, rowData.map(function (cell, index) {
    return /*#__PURE__*/React.createElement(_Row.default, {
      key: "row ".concat(index),
      columns: columns,
      type: 'td',
      cell: cell
    });
  })) : /*#__PURE__*/React.createElement("tfoot", {
    key: type
  }));
};
var _default = Headers;
exports.default = _default;