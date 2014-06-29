/**
* Created by sskyu on 2014/06/26.
*/
define(["require", "exports", 'modules/index/index', 'modules/user/index'], function(require, exports, IndexController, UserController) {
    function routes() {
        return [
            {
                key: 'index',
                url: '',
                controller: new IndexController.IndexView()
            },
            {
                key: 'user',
                url: 'user',
                controller: new UserController.IndexView()
            }
        ];
    }
    exports.routes = routes;
});
//# sourceMappingURL=routes.js.map
