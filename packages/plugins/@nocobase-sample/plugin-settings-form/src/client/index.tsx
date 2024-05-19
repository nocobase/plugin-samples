import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
import { PluginSettingsForm } from './PluginSettingsForm'
import { PluginSettingsFormPage } from './PluginSettingsFormPage'
import { PluginSettingsFormProvider } from './PluginSettingsFormProvider'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
      Component: PluginSettingsForm,
    });

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-form-page',
      Component: PluginSettingsFormPage,
    })

    this.app.addProvider(PluginSettingsFormProvider)
  }
}

export default PluginSettingFormClient;
