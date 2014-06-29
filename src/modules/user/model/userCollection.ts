/**
 * Created by sskyu on 2014/06/29.
 */

/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../api_defines/users.d.ts" />

import Backbone = require('backbone');
import Config = require('conf/config');
import CoreCollection = require('core/mvcbase/collection');
import UserModel = require('./userModel');

export class UserCollection extends CoreCollection.CoreCollection<UserModel.UserModel> {

    url = Config.Config.baseUrl(Config.Config.currentEnv) + '/users';

    constructor(options?) {
        super(options);
    }

    parse(response) {
        var userList: MyApp.IUserList;

        userList = response.list;

        return userList;

//        _.each(userList, (user) => {
//            this.models.push(new UserModel.UserModel(user));
//        }, this);
    }
}