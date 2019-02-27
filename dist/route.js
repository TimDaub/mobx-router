'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Route = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mobx = require('mobx');

var _utils = require('./utils');

var _regex = require('./regex');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Route = (exports.Route = (function() {
    //lifecycle methods

    //props
    function Route(props) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Route);

        (0, _utils.getObjectKeys)(props).forEach(function(propKey) {
            return (_this[propKey] = props[propKey]);
        });
        this.originalPath = this.path;

        //if there are optional parameters, replace the path with a regex expression
        this.path =
            this.path.indexOf('?') === -1
                ? this.path
                : this.path.replace(_regex.optionalRegex, '/?([^/]*)?$');
        this.rootPath = this.getRootPath();

        //bind
        this.getRootPath = this.getRootPath.bind(this);
        this.replaceUrlParams = this.replaceUrlParams.bind(this);
        this.getParamsObject = this.getParamsObject.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    /*
    Sets the root path for the current path, so it's easier to determine if the route entered/exited or just some params changed
    Example: for '/' the root path is '/', for '/profile/:username/:tab' the root path is '/profile'
    */

    (0, _createClass3.default)(Route, [
        {
            key: 'getRootPath',
            value: function getRootPath() {
                return '/' + this.path.split('/')[1];
            }

            /*
        replaces url params placeholders with params from an object
        Example: if url is /book/:id/page/:pageId and object is {id:100, pageId:200} it will return /book/100/page/200
        */
        },
        {
            key: 'replaceUrlParams',
            value: function replaceUrlParams(params) {
                var queryParams =
                    arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};

                var jsParams = (0, _mobx.toJS)(params);
                var jsQueryParams = (0, _mobx.toJS)(queryParams);

                var queryParamsString = _queryString2.default
                    .stringify(jsQueryParams)
                    .toString();
                var hasQueryParams = queryParamsString !== '';
                var newPath = this.originalPath;

                (0, _utils.getRegexMatches)(
                    this.originalPath,
                    _regex.paramRegex,
                    // eslint-disable-next-line
                    function(_ref) {
                        var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
                            fullMatch = _ref2[0],
                            paramKey = _ref2[1],
                            paramKeyWithoutColon = _ref2[2];

                        var value = jsParams[paramKeyWithoutColon];
                        newPath = value
                            ? newPath.replace(paramKey, value)
                            : newPath.replace('/' + paramKey, '');
                    }
                );

                return (
                    '' +
                    newPath +
                    (hasQueryParams ? '?' + queryParamsString : '')
                ).toString();
            }

            /*
        converts an array of params [123, 100] to an object
        Example: if the current this.path is /book/:id/page/:pageId it will return {id:123, pageId:100}
        */
        },
        {
            key: 'getParamsObject',
            value: function getParamsObject(paramsArray) {
                var params = [];
                (0, _utils.getRegexMatches)(
                    this.originalPath,
                    _regex.paramRegex,
                    // eslint-disable-next-line
                    function(_ref3) {
                        var _ref4 = (0, _slicedToArray3.default)(_ref3, 3),
                            fullMatch = _ref4[0],
                            paramKey = _ref4[1],
                            paramKeyWithoutColon = _ref4[2];

                        params.push(paramKeyWithoutColon);
                    }
                );

                var result = paramsArray.reduce(function(
                    obj,
                    paramValue,
                    index
                ) {
                    obj[params[index]] = paramValue;
                    return obj;
                },
                {});

                return result;
            }
        },
        {
            key: 'goTo',
            value: function goTo(store, paramsArr) {
                var paramsObject = this.getParamsObject(paramsArr);
                var queryParamsObject = _queryString2.default.parse(
                    window.location.search
                );
                store.router.goTo(this, paramsObject, store, queryParamsObject);
            }
        }
    ]);
    return Route;
})());
