'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.RouterStore = undefined;

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(
    _getOwnPropertyDescriptor
);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = require('mobx');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer
            ? descriptor.initializer.call(context)
            : void 0
    });
}

function _applyDecoratedDescriptor(
    target,
    property,
    decorators,
    descriptor,
    context
) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators
        .slice()
        .reverse()
        .reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error(
        'Decorating class property failed. Please ensure that transform-class-properties is enabled.'
    );
}

var RouterStore = (exports.RouterStore = ((_class = (function() {
    function RouterStore() {
        (0, _classCallCheck3.default)(this, RouterStore);

        _initDefineProp(this, 'params', _descriptor, this);

        _initDefineProp(this, 'queryParams', _descriptor2, this);

        _initDefineProp(this, 'currentView', _descriptor3, this);

        this.goTo = this.goTo.bind(this);
    }

    (0, _createClass3.default)(RouterStore, [
        {
            key: 'goTo',
            value: (function() {
                var _ref = (0, _asyncToGenerator3.default)(
                    /*#__PURE__*/ _regenerator2.default.mark(function _callee(
                        view,
                        paramsObj,
                        store,
                        queryParamsObj
                    ) {
                        var _this = this;

                        var nextPath,
                            pathChanged,
                            rootViewChanged,
                            currentParams,
                            currentQueryParams,
                            beforeExitResult,
                            beforeEnterResult,
                            nextParams,
                            nextQueryParams;
                        return _regenerator2.default.wrap(
                            function _callee$(_context) {
                                while (1) {
                                    switch ((_context.prev = _context.next)) {
                                        case 0:
                                            nextPath = view.replaceUrlParams(
                                                paramsObj,
                                                queryParamsObj
                                            );
                                            pathChanged =
                                                nextPath !== this.currentPath;

                                            if (pathChanged) {
                                                _context.next = 4;
                                                break;
                                            }

                                            return _context.abrupt('return');

                                        case 4:
                                            rootViewChanged =
                                                !this.currentView ||
                                                this.currentView !== view;
                                            currentParams = (0, _mobx.toJS)(
                                                this.params
                                            );
                                            currentQueryParams = (0,
                                            _mobx.toJS)(this.queryParams);

                                            if (
                                                !(
                                                    rootViewChanged &&
                                                    this.currentView &&
                                                    this.currentView.beforeExit
                                                )
                                            ) {
                                                _context.next = 13;
                                                break;
                                            }

                                            _context.next = 10;
                                            return this.currentView.beforeExit(
                                                this.currentView,
                                                currentParams,
                                                store,
                                                currentQueryParams,
                                                nextPath
                                            );

                                        case 10:
                                            _context.t0 = _context.sent;
                                            _context.next = 14;
                                            break;

                                        case 13:
                                            _context.t0 = true;

                                        case 14:
                                            beforeExitResult = _context.t0;

                                            if (!(beforeExitResult === false)) {
                                                _context.next = 17;
                                                break;
                                            }

                                            return _context.abrupt('return');

                                        case 17:
                                            if (
                                                !(
                                                    rootViewChanged &&
                                                    view.beforeEnter
                                                )
                                            ) {
                                                _context.next = 23;
                                                break;
                                            }

                                            _context.next = 20;
                                            return view.beforeEnter(
                                                view,
                                                (0, _mobx.toJS)(paramsObj),
                                                store,
                                                (0, _mobx.toJS)(queryParamsObj),
                                                nextPath
                                            );

                                        case 20:
                                            _context.t1 = _context.sent;
                                            _context.next = 24;
                                            break;

                                        case 23:
                                            _context.t1 = true;

                                        case 24:
                                            beforeEnterResult = _context.t1;

                                            if (
                                                !(beforeEnterResult === false)
                                            ) {
                                                _context.next = 27;
                                                break;
                                            }

                                            return _context.abrupt('return');

                                        case 27:
                                            rootViewChanged &&
                                                this.currentView &&
                                                this.currentView.onExit &&
                                                this.currentView.onExit(
                                                    this.currentView,
                                                    currentParams,
                                                    store,
                                                    currentQueryParams,
                                                    nextPath
                                                );

                                            (0, _mobx.runInAction)(function() {
                                                _this.currentView = view;
                                                _this.params = (0, _mobx.toJS)(
                                                    paramsObj
                                                );
                                                _this.queryParams = (0,
                                                _mobx.toJS)(queryParamsObj);
                                            });

                                            nextParams = (0, _mobx.toJS)(
                                                paramsObj
                                            );
                                            nextQueryParams = (0, _mobx.toJS)(
                                                queryParamsObj
                                            );

                                            rootViewChanged &&
                                                view.onEnter &&
                                                view.onEnter(
                                                    view,
                                                    nextParams,
                                                    store,
                                                    nextQueryParams
                                                );
                                            !rootViewChanged &&
                                                this.currentView &&
                                                this.currentView
                                                    .onParamsChange &&
                                                this.currentView.onParamsChange(
                                                    this.currentView,
                                                    nextParams,
                                                    store,
                                                    nextQueryParams
                                                );

                                        case 33:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            },
                            _callee,
                            this
                        );
                    })
                );

                function goTo(_x, _x2, _x3, _x4) {
                    return _ref.apply(this, arguments);
                }

                return goTo;
            })()
        },
        {
            key: 'currentPath',
            get: function get() {
                return this.currentView
                    ? this.currentView.replaceUrlParams(
                          this.params,
                          this.queryParams
                      )
                    : '';
            }
        }
    ]);
    return RouterStore;
})()),
((_descriptor = _applyDecoratedDescriptor(
    _class.prototype,
    'params',
    [_mobx.observable],
    {
        enumerable: true,
        initializer: function initializer() {
            return {};
        }
    }
)),
(_descriptor2 = _applyDecoratedDescriptor(
    _class.prototype,
    'queryParams',
    [_mobx.observable],
    {
        enumerable: true,
        initializer: function initializer() {
            return {};
        }
    }
)),
(_descriptor3 = _applyDecoratedDescriptor(
    _class.prototype,
    'currentView',
    [_mobx.observable],
    {
        enumerable: true,
        initializer: null
    }
)),
_applyDecoratedDescriptor(
    _class.prototype,
    'goTo',
    [_mobx.action],
    (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'goTo'),
    _class.prototype
),
_applyDecoratedDescriptor(
    _class.prototype,
    'currentPath',
    [_mobx.computed],
    (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'currentPath'),
    _class.prototype
)),
_class));
