/**
 * Created by sskyu on 2014/06/29.
 */

/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');

export class CoreView extends Backbone.View<Backbone.Model> {
    constructor(options?) {
        super(options);
    }
}