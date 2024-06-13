import { Plugin } from '@nocobase/server';
import axios from 'axios';
export class PluginFieldOrderDetailsServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.resourceManager.define({
      name: 'remoteData',
      actions: {
        async get(ctx, next) {
          const { filterByTk } = ctx.action.params;
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
          ctx.body = {
            data,
            filterByTk,
          };
          await next();
        },
      },
    });
    this.app.acl.allow('remoteData', 'get', 'loggedIn');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginFieldOrderDetailsServer;
