/**
* Created by sskyu on 2014/06/22.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function(require, exports, Backbone) {
    var ControllerView = (function (_super) {
        __extends(ControllerView, _super);
        function ControllerView(options) {
            // set element
            this.setElement($('#core-contentWrapper'));

            _super.call(this, options);
        }
        ControllerView.prototype.show = function () {
            var html = this.render().$el.html();
            $('#core-contentWrapper').html(html);
        };
        return ControllerView;
    })(Backbone.View);
    exports.ControllerView = ControllerView;
});
//# sourceMappingURL=controller.js.map
