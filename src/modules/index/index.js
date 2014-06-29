/**
* Created by sskyu on 2014/06/23.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', '../../core/mvcbase/controller', "hbs!src/modules/index/hbs/index"], function(require, exports, Backbone, Controller) {
    var hbs = require('hbs!src/modules/index/hbs/index');

    var IndexView = (function (_super) {
        __extends(IndexView, _super);
        function IndexView(options) {
            // set events
            this.events = {
                'click button': '_onClickUserList'
            };

            // run constructor of super class
            _super.call(this, options);
        }
        IndexView.prototype.render = function () {
            this.$el.html(hbs({ name: 'indexView' }));
            return this;
        };

        IndexView.prototype._onClickUserList = function () {
            // navigate user module
            Backbone.history.navigate('user', true);
        };
        return IndexView;
    })(Controller.ControllerView);
    exports.IndexView = IndexView;
});
//# sourceMappingURL=index.js.map
