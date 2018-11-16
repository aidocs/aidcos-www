'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
    async index() {
        const { ctx, service, config } = this;
        ctx.body = {};
    }
}

module.exports = ApiController;