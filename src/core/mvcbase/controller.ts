/**
 * Created by sskyu on 2014/06/22.
 */

/// <reference path="../../../typings/tsd.d.ts" />

import Backbone = require('backbone');

export interface IControllerView {
    show(): void;
}

export class ControllerView extends Backbone.View<Backbone.Model> implements IControllerView {
    constructor(options?:any) {
        // set element
        this.setElement($('#core-contentWrapper'));

        super(options);
    }

    show() {
        var html = this.render().$el.html();
        $('#core-contentWrapper').html(html);
    }
}