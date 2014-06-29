/**
 * Created by sskyu on 2014/06/23.
 */

/// <reference path="../../../typings/tsd.d.ts" />
/// <amd-dependency path="hbs!src/modules/index/hbs/index" />

import Backbone = require('backbone');
import Controller = require('../../core/mvcbase/controller');

var hbs = require('hbs!src/modules/index/hbs/index');

export class IndexView extends Controller.ControllerView {
    'use strict';

    constructor(options?) {
        // set events
        this.events = <any>{
            'click button': '_onClickUserList'
        };

        // run constructor of super class
        super(options);
    }

    render(): IndexView {
        this.$el.html(hbs({ name: 'indexView' }));
        return this;
    }

    _onClickUserList(): void {
        // navigate user module
        Backbone.history.navigate('user', true);
    }
}
