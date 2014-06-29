/**
* Created by sskyu on 2014/06/29.
*/
define(["require", "exports"], function(require, exports) {
    /// <reference path="../../typings/tsd.d.ts" />
    (function (Env) {
        Env[Env["Dev"] = 0] = "Dev";
        Env[Env["Prd"] = 1] = "Prd";
    })(exports.Env || (exports.Env = {}));
    var Env = exports.Env;

    var Config = (function () {
        function Config() {
        }
        Config.baseUrl = function (env) {
            var url;

            switch (env) {
                case 0 /* Dev */:
                    url = 'http://localhost:5000';
                    break;
                case 1 /* Prd */:
                    url = 'http://localhost';
            }

            return url;
        };
        Config.currentEnv = 0 /* Dev */;
        return Config;
    })();
    exports.Config = Config;
});
//# sourceMappingURL=config.js.map
