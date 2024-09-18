import { Plugin } from '@nocobase/server';

export class PluginResourceDefineServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.resourceManager.define({
      name: 'testresourceManagerDefine',
      actions: {
        send1: async (ctx, next) => {
          ctx.body = 'ok1';
          await next();
        },
        send2: async (ctx, next) => {
          ctx.body = 'ok2';
          await next();
        },
        send3: async (ctx, next) => {
          ctx.body = 'ok3';
          await next();
        },
      },
    });
    // 公开访问
    this.app.acl.allow('testresourceManagerDefine', 'send1', 'public');
    // 仅登录用户可以访问
    this.app.acl.allow('testresourceManagerDefine', 'send2', 'loggedIn');
    // 由角色配置，需要后台操作
    // URL: http://localhost:13000/admin/settings/users-permissions/roles
    this.app.acl.registerSnippet({
      name: `pm.${this.name}`,
      actions: [
        'testresourceManagerDefine:send3',
      ],
    });
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginResourceDefineServer;
