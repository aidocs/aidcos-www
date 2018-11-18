'use strict';

const getPageType = function(path) {
    if ( path === "/" || path === "/index.html" ) {
        return "docscenter";
    } else if ( path === "/docscenter.html" ) {
        return "docscenter";
    } else if ( path === "/information.html" ) {
        return "information";
    } else if ( path === "/partner.html" ) {
        return "partner";
    }
}

module.exports = (options, app) => {
    //获取模版需要的公共数据
    return async function (ctx, next) {
        const config = app.config;
        const service = ctx.service;
        let locals = ctx.locals;
        locals.pageType = getPageType(ctx.path);
        locals.site = config.Site();
        await next();
    }
};