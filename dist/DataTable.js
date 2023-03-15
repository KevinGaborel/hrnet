"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _Headers = _interopRequireDefault(require("./components/Headers"));
require("./templates/purpleTemp.css");
var _useRowData2 = _interopRequireDefault(require("./hooks/useRowData"));
var _SearchBar = _interopRequireDefault(require("./components/SearchBar"));
var _SelectNbEntries = _interopRequireDefault(require("./components/SelectNbEntries"));
var _PageSelector = _interopRequireDefault(require("./components/PageSelector"));
var _react = _interopRequireWildcard(require("react"));
/**
 * It is a function that takes an object as a prop and returns a DataTable
 * @param {object} props  object to DataTable
 * @param {array} props.data table of object, table data
 * @param {object} props.data[0] object representing a user
 * @param {array} props.columns table of object, representing column heading titles and column-bound data
 * @param {object} props.columns[0] object that represents a column with its title and its data
 * @param {string} props.columns[0].title string, representing the title in the column heading
 * @param {string} props.columns[0].data string, represents the name of the key of the corresponding props.data object in order to fill the column there
 * @return {JSX.Element} DataTable
 */

var DataTable = function DataTable(_ref) {
  var data = _ref.data,
    columns = _ref.columns;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    newData = _useState2[0],
    setNewData = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    tableLength = _useState4[0],
    setTableLength = _useState4[1];
  var _useRowData = (0, _useRowData2.default)(newData ? newData : data),
    rowData = _useRowData.rowData,
    order = _useRowData.order,
    setOrder = _useRowData.setOrder;
  var _useState5 = (0, _react.useState)(rowData),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    dataView = _useState6[0],
    setDataView = _useState6[1];
  var _useState7 = (0, _react.useState)({
      nbPage: [1],
      actualPage: 1
    }),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    counter = _useState8[0],
    setCounter = _useState8[1];
  (0, _react.useEffect)(function () {
    if (rowData.length > tableLength) {
      var nbPage = Math.ceil(rowData.length / tableLength);
      var result = [];
      for (var i = 1; i <= nbPage; i++) {
        result.push(i);
      }
      setDataView(rowData.slice(tableLength * counter.actualPage - tableLength, tableLength * counter.actualPage));
      setCounter((0, _objectSpread2.default)((0, _objectSpread2.default)({}, counter), {}, {
        nbPage: result
      }));
    } else {
      setCounter((0, _objectSpread2.default)((0, _objectSpread2.default)({}, counter), {}, {
        nbPage: [1]
      }));
      setDataView(rowData);
    }
  }, [tableLength, rowData, counter.actualPage, order]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "datable"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "head-tab"
  }, /*#__PURE__*/_react.default.createElement(_SelectNbEntries.default, {
    setTableLength: setTableLength,
    setCounter: setCounter,
    counter: counter
  }), /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    data: data,
    setNewData: setNewData
  })), /*#__PURE__*/_react.default.createElement("table", null, rowData.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Headers.default, {
    type: 'thead',
    columns: columns,
    setOrder: setOrder,
    order: order
  }), /*#__PURE__*/_react.default.createElement(_Headers.default, {
    type: 'tbody',
    rowData: dataView,
    columns: columns
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Headers.default, {
    type: 'thead',
    columns: columns,
    setOrder: setOrder,
    order: order
  }), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: columns.length,
    className: "table-empty"
  }, "No matching records found"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "foot-tab"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Showing ".concat(tableLength * counter.actualPage - tableLength + 1, " \n          to ").concat(rowData.length < tableLength * counter.actualPage ? rowData.length : tableLength * counter.actualPage, " \n          of ").concat(rowData.length, " entries")), /*#__PURE__*/_react.default.createElement(_PageSelector.default, {
    setCounter: setCounter,
    counter: counter
  })));
};
var _default = DataTable;
exports.default = _default;