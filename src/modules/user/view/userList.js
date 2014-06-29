/**
* Created by sskyu on 2014/06/29.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'core/mvcbase/view', 'modules/user/model/userCollection', "hbs!src/modules/user/hbs/user"], function(require, exports, CoreView, UserCollection) {
    var hbsUserList = require('hbs!src/modules/user/hbs/user');

    var UserListView = (function (_super) {
        __extends(UserListView, _super);
        function UserListView(options) {
            _super.call(this, options);

            // set instance
            this._userCollection = new UserCollection.UserCollection();

            // bind events
            this.listenTo(this._userCollection, 'sync', this._onSyncUserCollection);
        }
        UserListView.prototype.render = function () {
            return this;
        };

        /**
        * fetch data
        * @public
        */
        UserListView.prototype.init = function () {
            _.throttle(this._userCollection.fetch(), 200);
        };

        UserListView.prototype._onSyncUserCollection = function () {
            var _this = this;
            var users = this._userCollection.toJSON();

            _.each(users, function (user) {
                _this.$el.append(hbsUserList(user));
            });

            this.trigger('onRendered', this.$el);
        };
        return UserListView;
    })(CoreView.CoreView);
    exports.UserListView = UserListView;
});
//# sourceMappingURL=userList.js.map
