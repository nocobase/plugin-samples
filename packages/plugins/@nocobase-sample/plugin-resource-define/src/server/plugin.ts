import { Plugin } from '@nocobase/server';

export class PluginResourceDefineServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.resourceManager.define({
      name: 'testresourceManagerDefine',
      actions: {
        send: async (ctx, next) => {
          ctx.body = 'ok';
          await next();
        },
      },
    });
    // 公开访问，仅用于测试
    this.app.acl.allow('testresourceManagerDefine', 'send', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginResourceDefineServer;
