import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

import { PluginSettingsTable } from './PluginSettingsTable';
import { PluginSettingsTablePage } from './PluginSettingsTablePage'
import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Table',
      icon: 'TableOutlined',
      Component: PluginSettingsTable,
    });

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })

    this.app.addProvider(PluginSettingsTableProvider)
  }
}

export default PluginSettingsTableClient;
