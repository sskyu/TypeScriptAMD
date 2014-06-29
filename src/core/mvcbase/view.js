/**
* Created by sskyu on 2014/06/29.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone'], function(require, exports, Backbone) {
    var CoreView = (function (_super) {
        __extends(CoreView, _super);
        function CoreView(options) {
            _super.call(this, options);
        }
        return CoreView;
    })(Backbone.View);
    exports.CoreView = CoreView;
});
//# sourceMappingURL=view.js.map
