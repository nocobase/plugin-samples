import { Plugin } from '@nocobase/client';
import PluginDataSourceMainClient from '@nocobase/plugin-data-source-main/client';

export class PluginDataSourceMainAddPresetFieldClient extends Plugin {
  async load() {
    const plugin = this.pm.get(PluginDataSourceMainClient);
    plugin.addCollectionPresetField({
      order: 900,
      description: '{{t("Custom preset field description") }}',
      value: {
        name: 'custom',
        type: 'string',
        interface: 'input',
        uiSchema: {
          type: 'string',
          title: '{{t("Custom preset field")}}',
          'x-component': 'Input',
        },
      },
    });
  }
}

export default PluginDataSourceMainAddPresetFieldClient;
