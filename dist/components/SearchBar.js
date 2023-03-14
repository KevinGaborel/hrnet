"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createForOfIteratorHelper"));
var _react = _interopRequireDefault(require("react"));
var SearchBar = function SearchBar(_ref) {
  var data = _ref.data,
    setNewData = _ref.setNewData;
  var handleChange = function handleChange(e) {
    var entryUser = e.target.value.toLowerCase();
    var newData;
    if (entryUser.length >= 2) {
      //si la valeur entrée par l'utilisateur est supérieur à 2
      //on lance la recherche
      newData = [];
      var _iterator = (0, _createForOfIteratorHelper2.default)(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var row = _step.value;
          for (var key in row) {
            var result = void 0;
            if (typeof row[key] === 'string') {
              result = row[key].toLowerCase().includes(entryUser) && row;
            } else {
              result = row[key].toString().includes(entryUser) && row;
            }
            if (result) {
              newData.push(result);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setNewData(newData);
    } else {
      setNewData(data);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "searchBar"
  }, "Search: "), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    name: "searchBar",
    id: "searchBar",
    placeholder: "at least 3 characters",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }));
};
var _default = SearchBar;
exports.default = _default;