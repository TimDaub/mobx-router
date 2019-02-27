'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.MobxRouter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// eslint-disable-next-line
var MobxRouterBase = function MobxRouterBase(_ref) {
    var router = _ref.store.router;
    return router.currentView && router.currentView.component
        ? router.currentView.component
        : _react2.default.createElement('div', null);
};

var MobxRouter = (exports.MobxRouter = (0, _mobxReact.inject)('store')(
    (0, _mobxReact.observer)(MobxRouterBase)
));
