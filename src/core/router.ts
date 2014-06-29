/**
 * Created by sskyu on 2014/06/25.
 */

/// <reference path="../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Config = require('src/conf/routes');
import CoreController = require('core/mvcbase/controller');

export class Router extends Backbone.Router {
    'use strict';

    constructor(options?) {
        super(options);
    }

    routes(): any {
        var _routes: any = {};
        var configs: Config.IRouteParameter[] = Config.routes();

        _.each(configs, (config: Config.IRouteParameter) => {

            var key = config.key;
            var url = config.url;
            var controller = config.controller;

            _routes[url] = key;

            this._setRoute(key, controller);
        });

        return _routes;
    }

    private _setRoute(key: string, controller: CoreController.IControllerView): void {
        this.on('route:' + key, function () {
            controller.show.apply(controller, arguments);
        });
    }
}