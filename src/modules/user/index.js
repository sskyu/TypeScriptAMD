/**
* Created by sskyu on 2014/06/28.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'core/mvcbase/controller', 'modules/user/view/userList', "hbs!src/modules/user/hbs/index"], function(require, exports, Controller, UserListView) {
    var hbs = require('hbs!src/modules/user/hbs/index');

    var IndexView = (function (_super) {
        __extends(IndexView, _super);
        function IndexView(options) {
            // run constructor of super class
            _super.call(this, options);

            // create instance
            this._userListView = new UserListView.UserListView();

            // bind events
            this.listenTo(this._userListView, 'onRendered', this._onRenderedUserList);
        }
        IndexView.prototype.render = function () {
            this.$el.html(hbs());

            this._userListView.init();

            return this;
        };

        IndexView.prototype._onRenderedUserList = function () {
            var $userList = $('#user-userListArea', this.$el);

            $userList.html(this._userListView.render().$el);
        };
        return IndexView;
    })(Controller.ControllerView);
    exports.IndexView = IndexView;
});
//# sourceMappingURL=index.js.map
