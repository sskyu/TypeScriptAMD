/**
* Created by sskyu on 2014/06/22.
*/
/// <reference path="./typings/tsd.d.ts" />
require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone',
        handlebars: 'bower_components/handlebars/handlebars',
        // plugins
        hbs: 'bower_components/require-handlebars-plugin/hbs',
        // shortcuts
        conf: 'src/conf',
        core: 'src/core',
        modules: 'src/modules'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        }
    }
});

require([
    'jquery',
    'backbone',
    './src/core/router'
], function ($, Backbone, Router) {
    var router = new Router.Router();
    Backbone.history.start();
});
//# sourceMappingURL=app.js.map
