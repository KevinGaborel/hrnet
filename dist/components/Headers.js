"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Row = _interopRequireDefault(require("./Row"));
var _react = _interopRequireDefault(require("react"));
/**
 * It is a function that takes an object as a prop and returns a Headers
 * @param {object} props object to Headers
 * @param {string} props.type string, represents the table Headers type (thead, tbody or tfoot)
 * @param {array} props.columns table of object, representing column heading titles and column-bound data
 * @param {object} props.columns[0] object that represents a column with its title and its data
 * @param {string} props.columns[0].title string, representing the title in the column heading
 * @param {string} props.columns[0].data string, represents the name of the key of the corresponding props.data object in order to fill the column there
 * @param {function} props.setOrder function that allows you to modify the value of the state order
 * @param {object} props.order object representing the sort type (ascending or descending) and the sorted column
 * @param {array} props.rowData table of object representing users sorted
 * @return {JSX.Element} Headers
 */

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