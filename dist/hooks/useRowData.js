"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var useRowData = function useRowData(data) {
  var _useState = (0, _react.useState)({
      sort: undefined,
      col: undefined
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    order = _useState2[0],
    setOrder = _useState2[1];
  var rowData = (0, _react.useMemo)(function () {
    var regexDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
    if (data.length < 1) {
      return data;
    }
    ;
    var firstValue = data[0][order.col];
    if (order.sort === "asc") {
      if (typeof firstValue === "number" || parseInt(firstValue) && !regexDate.test(firstValue)) {
        return data.sort(function (a, b) {
          return a[order.col] - b[order.col];
        });
      } else if (regexDate.test(firstValue)) {
        return data.sort(function (a, b) {
          if (Date.parse(a[order.col]) < Date.parse(b[order.col])) {
            return -1;
          } else if (Date.parse(a[order.col]) > Date.parse(b[order.col])) {
            return 1;
          }
        });
      } else {
        return data.sort(function (a, b) {
          if (a[order.col] < b[order.col]) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    } else if (order.sort === "desc") {
      return (0, _toConsumableArray2.default)(data).reverse();
    } else {
      return data;
    }
  }, [order, data]);
  return {
    rowData: rowData,
    order: order,
    setOrder: setOrder
  };
};
var _default = useRowData;
exports.default = _default;