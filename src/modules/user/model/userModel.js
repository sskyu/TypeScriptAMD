/**
* Created by sskyu on 2014/06/29.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'core/mvcbase/model'], function(require, exports, CoreModel) {
    var UserModel = (function (_super) {
        __extends(UserModel, _super);
        function UserModel() {
            _super.apply(this, arguments);
        }
        UserModel.prototype.parse = function (response) {
            return response;
        };
        return UserModel;
    })(CoreModel.CoreModel);
    exports.UserModel = UserModel;
});
//# sourceMappingURL=userModel.js.map
