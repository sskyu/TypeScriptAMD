/**
 * Created by sskyu on 2014/06/29.
 */

/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../api_defines/users.d.ts" />

import Backbone = require('backbone');
import CoreModel = require('core/mvcbase/model');

export class UserModel extends CoreModel.CoreModel {
    'use strict';

    parse(response): MyApp.IUser {
        return response;
    }
}