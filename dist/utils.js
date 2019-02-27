'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.getRegexMatches = exports.viewsForDirector = exports.getObjectKeys = exports.isObject = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var isObject = (exports.isObject = function isObject(obj) {
    return (
        obj &&
        (typeof obj === 'undefined'
            ? 'undefined'
            : (0, _typeof3.default)(obj)) === 'object' &&
        !Array.isArray(obj)
    );
});
var getObjectKeys = (exports.getObjectKeys = function getObjectKeys(obj) {
    return isObject(obj) ? (0, _keys2.default)(obj) : [];
});

var viewsForDirector = (exports.viewsForDirector = function viewsForDirector(
    views,
    store
) {
    return getObjectKeys(views).reduce(function(obj, viewKey) {
        var view = views[viewKey];
        obj[view.path] = function() {
            for (
                var _len = arguments.length, paramsArr = Array(_len), _key = 0;
                _key < _len;
                _key++
            ) {
                paramsArr[_key] = arguments[_key];
            }

            return view.goTo(store, paramsArr);
        };
        return obj;
    }, {});
});

var getRegexMatches = (exports.getRegexMatches = function getRegexMatches(
    string,
    regexExpression,
    callback
) {
    var match = void 0;
    while ((match = regexExpression.exec(string)) !== null) {
        callback(match);
    }
});
