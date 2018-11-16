'use strict';

const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1532073849273_2285';

    config.password = "bba76d0c6606b500";

    config.security = {
        csrf: {
            ignore: '/api/*',
        },
    };

    config.view = {
        defaultViewEngine: 'ejs',
        mapping: {
            '.html': 'ejs',
        },
    };

    // add your config here
    config.middleware = [
        'common'
    ];

    //404 page
    config.notfound = {
        pageUrl: '/view/404.html',
    };

    //站点信息
    config.Site = function () {
        return {}
    }

    return config;
};