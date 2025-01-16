import { Plugin } from '@nocobase/client';
import { PluginFileManagerClient } from '@nocobase/plugin-file-manager/client';
import common from './common';

export class PluginFileStorageDemoClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {}

  // You can get and modify the app instance here
  async load() {
    const plugin = this.app.pm.get<PluginFileManagerClient>('file-manager');
    plugin.registerStorageType('demo-storage', {
      title: `{{t("Demo storage")}}`,
      name: 'demo-storage',
      fieldset: {
        title: common.title,
        name: common.name,
        baseUrl: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
          'x-display': 'hidden',
          default: '/storage/uploads',
        },
        options: {
          type: 'object',
          'x-component': 'div',
          properties: {
            documentRoot: {
              title: `{{t("Destination")}}`,
              type: 'string',
              'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-display': 'hidden',
              default: 'storage/uploads',
            },
          },
        },
        path: {
          'x-component': 'CollectionField',
          'x-decorator': 'FormItem',
          'x-component-props': {
            addonBefore: 'storage/uploads/',
          },
        },
        rules: common.rules,
        default: common.default,
        paranoid: common.paranoid,
      },
    });
  }
}

export default PluginFileStorageDemoClient;
