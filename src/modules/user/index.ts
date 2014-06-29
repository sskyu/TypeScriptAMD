/**
 * Created by sskyu on 2014/06/28.
 */

/// <reference path="../../../typings/tsd.d.ts" />
/// <amd-dependency path="hbs!src/modules/user/hbs/index" />

import Backbone = require('backbone');
import Controller = require('core/mvcbase/controller');
import UserListView = require('modules/user/view/userList');

var hbs = require('hbs!src/modules/user/hbs/index');

export class IndexView extends Controller.ControllerView {
    'use strict';

    /**
     * instance of UserListView
     */
    _userListView: UserListView.UserListView;

    constructor(options?) {
        // run constructor of super class
        super(options);

        // create instance
        this._userListView = new UserListView.UserListView();

        // bind events
        this.listenTo(this._userListView, 'onRendered', this._onRenderedUserList);
    }

    render(): IndexView {
        this.$el.html(hbs());

        this._userListView.init();

        return this;
    }

    _onRenderedUserList(): void {
        var $userList: any = $('#user-userListArea', this.$el);

        $userList.html(this._userListView.render().$el);
    }
}
