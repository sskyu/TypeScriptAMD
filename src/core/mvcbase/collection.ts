/**
 * Created by sskyu on 2014/06/29.
 */

/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');
import CoreModel = require('./model');

export class CoreCollection<TModel extends CoreModel.CoreModel> extends Backbone.Collection<Backbone.Model> {
    constructor(options?) {
        super(options);
    }
}