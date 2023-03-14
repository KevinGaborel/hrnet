"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _react = _interopRequireDefault(require("react"));
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