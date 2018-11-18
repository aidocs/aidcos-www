'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
    async index() {
        const { ctx, service, config } = this;
        let data = {};
        await ctx.render('/pages/index', data);
    }

    async information() {
        const { ctx, service, config } = this;
        let data = {};
        await ctx.render('/pages/information', data);
    }

    async partner() {
        const { ctx, service, config } = this;
        let data = {};
        await ctx.render('/pages/partner', data); 
    }
}

module.exports = PageController;