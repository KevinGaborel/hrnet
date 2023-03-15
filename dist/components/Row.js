"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Cell = _interopRequireDefault(require("./Cell"));
var _react = _interopRequireDefault(require("react"));
/**
 * It is a function that takes an object as a prop and returns a Row
 * @param {object} props object to Row
 * @param {string} props.type string, represents the table Cell type in the Row
 * @param {array} props.columns table of object, representing column heading titles and column-bound data
 * @param {object} props.columns[0] object that represents a column with its title and its data
 * @param {string} props.columns[0].title string, representing the title in the column heading
 * @param {string} props.columns[0].data string, represents the name of the key of the corresponding props.data object in order to fill the column there
 * @param {string} props.styleName string, represents the class name of the Cell
 * @param {function} props.setOrder function that allows you to modify the value of the state order
 * @param {object} props.cell object representing user
 * @param {object} props.order object representing the sort type (ascending or descending) and the sorted column
 * @return {JSX.Element} Row
 */

var Row = function Row(_ref) {
  var type = _ref.type,
    columns = _ref.columns,
    styleName = _ref.styleName,
    setOrder = _ref.setOrder,
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