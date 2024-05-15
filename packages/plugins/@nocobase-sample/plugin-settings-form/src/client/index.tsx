import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
import { CustomContextProvider } from './CustomContextProvider';
import { PluginSettingsForm } from './PluginSettingsForm';

export class PluginSettingsFormClient extends Plugin {
  async load() {
    this.app.addProvider(CustomContextProvider);
    this.app.pluginSettingsManager.add(name, {
      title: 'Single Route',
      icon: 'ApiOutlined',
      Component: PluginSettingsForm,
    });
  }
}

export default PluginSettingsFormClient;
