/**
 * Created by sskyu on 2014/06/29.
 */

/// <reference path="../../typings/tsd.d.ts" />

export enum Env {
    Dev,
    Prd
}

export class Config {
    static currentEnv: Env = Env.Dev;

    constructor() {
    }

    static baseUrl(env: Env): string {
        var url: string;

        switch (env) {
            case Env.Dev:
                url = 'http://localhost:5000';
                break;
            case Env.Prd:
                url = 'http://localhost';
        }

        return url;
    }
}