"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Cell = _interopRequireDefault(require("./Cell"));
var _react = _interopRequireDefault(require("react"));
var Row = function Row(_ref) {
  var columns = _ref.columns,
    styleName = _ref.styleName,
    setOrder = _ref.setOrder,
    type = _ref.type,
    cell = _ref.cell,
    order = _ref.order;
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: styleName
  }, columns.map(function (col) {
    return /*#__PURE__*/_react.default.createElement(_Cell.default, {
      key: col.title,
      type: type,
      setOrder: setOrder,
      order: order,
      data: col.data
    }, cell ? cell[col.data] : col.title);
  }));
};
var _default = Row;
exports.default = _default;