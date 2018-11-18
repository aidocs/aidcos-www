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

    router.get('/', controller.page.index); //首页
    router.get('/index.html', controller.page.index); //首页
    router.get('/information.html', controller.page.information); //信息聚合
    router.get('/partner.html', controller.page.partner); //或者伙伴
    //api
};