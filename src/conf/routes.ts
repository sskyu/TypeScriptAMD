/**
 * Created by sskyu on 2014/06/26.
 */

/// <reference path="../../typings/tsd.d.ts" />

import IndexController = require('modules/index/index');
import UserController = require('modules/user/index');
import CoreController = require('core/mvcbase/controller');

export interface IRouteParameter {
    /**
     * configuration id
     */
    key: string;

    /**
     * hash
     */
    url: string;

    /**
     * instance of ControllerView
     */
    controller: CoreController.ControllerView;
}

export function routes(): IRouteParameter[] {
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
