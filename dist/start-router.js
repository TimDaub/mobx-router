'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.startRouter = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _director = require('director/build/director');

var _mobx = require('mobx');

var _utils = require('./utils');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createDirectorRouter = function createDirectorRouter(views, store, config) {
    new _director.Router(
        (0, _extends3.default)({}, (0, _utils.viewsForDirector)(views, store))
    )
        .configure((0, _extends3.default)({}, config))
        .init(config && config.html5history ? null : '/');
};

var startRouter = (exports.startRouter = function startRouter(
    views,
    store,
    config
) {
    //set default parameter html5history
    if (
        !config ||
        (config &&
            (config.html5history === null ||
                config.html5history == 'undefined'))
    ) {
        config = { html5history: true };
    }

    //create director configuration
    createDirectorRouter(views, store, config);

    //autorun and watch for path changes
    (0, _mobx.autorun)(function() {
        var currentPath = store.router.currentPath;

        if (config && config.html5history) {
            if (
                currentPath !==
                window.location.pathname + window.location.search
            ) {
                window.history.pushState(null, null, currentPath);
            }
        } else {
            var hash = '#' + currentPath;
            if (hash !== window.location.hash) {
                window.history.pushState(null, null, hash);
            }
        }
    });
});
