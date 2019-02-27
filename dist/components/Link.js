'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Link = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// eslint-disable-next-line
var LinkBase = function LinkBase(_ref) {
    var view = _ref.view,
        className = _ref.className,
        _ref$params = _ref.params,
        params = _ref$params === undefined ? {} : _ref$params,
        _ref$queryParams = _ref.queryParams,
        queryParams = _ref$queryParams === undefined ? {} : _ref$queryParams,
        _ref$store = _ref.store,
        store = _ref$store === undefined ? {} : _ref$store,
        _ref$refresh = _ref.refresh,
        refresh = _ref$refresh === undefined ? false : _ref$refresh,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style,
        children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? children : _ref$title,
        _ref$router = _ref.router,
        router = _ref$router === undefined ? store.router : _ref$router;

    if (!router) {
        console.error(
            'The router prop must be defined for a Link component to work!'
        );
        return null;
    }
    return _react2.default.createElement(
        'a',
        {
            style: style,
            className: className,
            onClick: function onClick(e) {
                var middleClick = e.button === 2;
                var cmdOrCtrl = e.metaKey || e.ctrlKey;
                var openinNewTab = middleClick || cmdOrCtrl;
                var shouldNavigateManually =
                    refresh || openinNewTab || cmdOrCtrl;

                if (!shouldNavigateManually) {
                    e.preventDefault();
                    router.goTo(view, params, store, queryParams);
                }
            },
            href: view.replaceUrlParams(params, queryParams)
        },
        title
    );
};

var Link = (exports.Link = (0, _mobxReact.observer)(LinkBase));
