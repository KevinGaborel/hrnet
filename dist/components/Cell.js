"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _react = _interopRequireDefault(require("react"));
/**
 * It is a function that takes an object as a prop and returns a Cell
 * @param {object} props object to Cell
 * @param {string} props.type string, represents the table cell type
 * @param {React.ReactNode} props.children represents the text to display in the component
 * @param {function} props.setOrder function that allows you to modify the value of the state order
 * @param {string} props.data string, it is the name of the key which corresponds to the data of the column
 * @param {object} props.order object representing the sort type (ascending or descending) and the sorted column
 * @return {JSX.Element} Cell
 */

var Cell = function Cell(_ref) {
  var type = _ref.type,
    children = _ref.children,
    setOrder = _ref.setOrder,
    data = _ref.data,
    order = _ref.order;
  var handleCell = function handleCell() {
    if (order.sort === 'asc' && order.col === data) {
      setOrder({
        sort: 'desc',
        col: data
      });
    } else {
      setOrder({
        sort: 'asc',
        col: data
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, type === 'th' ? /*#__PURE__*/_react.default.createElement("th", {
    onClick: function onClick() {
      return handleCell();
    }
  }, children, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: order.sort === undefined ? _freeSolidSvgIcons.faSort : data === order.col && order.sort === 'asc' ? _freeSolidSvgIcons.faSortUp : data === order.col && order.sort === 'desc' ? _freeSolidSvgIcons.faSortDown : _freeSolidSvgIcons.faSort
  })) : /*#__PURE__*/_react.default.createElement("td", null, children));
};
var _default = Cell;
exports.default = _default;