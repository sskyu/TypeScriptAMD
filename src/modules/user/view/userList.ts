/**
 * Created by sskyu on 2014/06/29.
 */

/// <reference path="../../../../typings/tsd.d.ts" />
/// <amd-dependency path="hbs!src/modules/user/hbs/user" />

import Backbone = require('backbone');
import CoreView = require('core/mvcbase/view');
import UserCollection = require('modules/user/model/userCollection');

var hbsUserList = require('hbs!src/modules/user/hbs/user');

export class UserListView extends CoreView.CoreView {

    /**
     * instance of UserCollection
     */
    _userCollection: UserCollection.UserCollection;

    constructor(options?) {
        super(options);

        // set instance
        this._userCollection = new UserCollection.UserCollection();

        // bind events
        this.listenTo(this._userCollection, 'sync', this._onSyncUserCollection);
    }

    render(): UserListView {
        return this;
    }

    /**
     * fetch data
     * @public
     */
    init(): void {
        _.throttle(this._userCollection.fetch(), 200);
    }


    _onSyncUserCollection(): void {
        var users = this._userCollection.toJSON();

        _.each(users, (user) => {
            this.$el.append(hbsUserList(user));
        });

        this.trigger('onRendered', this.$el);
    }
}