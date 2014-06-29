/**
* Created by sskyu on 2014/06/25.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'src/conf/routes'], function(require, exports, Backbone, Config) {
    var Router = (function (_super) {
        __extends(Router, _super);
        function Router(options) {
            _super.call(this, options);
        }
        Router.prototype.routes = function () {
            var _this = this;
            var _routes = {};
            var configs = Config.routes();

            _.each(configs, function (config) {
                var key = config.key;
                var url = config.url;
                var controller = config.controller;

                _routes[url] = key;

                _this._setRoute(key, controller);
            });

            return _routes;
        };

        Router.prototype._setRoute = function (key, controller) {
            this.on('route:' + key, function () {
                controller.show.apply(controller, arguments);
            });
        };
        return Router;
    })(Backbone.Router);
    exports.Router = Router;
});
//# sourceMappingURL=router.js.map
