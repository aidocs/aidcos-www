'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
    const {
        router,
        controller
    } = app;

    //首页路由
    router.redirect('/index.php', '/index.html', 302);
    router.redirect('/index.asp', '/index.html', 302);

    router.get('/', controller.home.index); //首页
    router.get('/index.html', controller.home.index); //首页
    
    //api
};