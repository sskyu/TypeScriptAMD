/**
* Created by sskyu on 2014/06/29.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'conf/config', 'core/mvcbase/collection'], function(require, exports, Config, CoreCollection) {
    var UserCollection = (function (_super) {
        __extends(UserCollection, _super);
        function UserCollection(options) {
            _super.call(this, options);
            this.url = Config.Config.baseUrl(Config.Config.currentEnv) + '/users';
        }
        UserCollection.prototype.parse = function (response) {
            var userList;

            userList = response.list;

            return userList;
            //        _.each(userList, (user) => {
            //            this.models.push(new UserModel.UserModel(user));
            //        }, this);
        };
        return UserCollection;
    })(CoreCollection.CoreCollection);
    exports.UserCollection = UserCollection;
});
//# sourceMappingURL=userCollection.js.map
