import { Plugin } from '@nocobase/client';
import { tableBorderedSettingsItem } from './tableBorderSettingsItem'

export class PluginSchemaSettingsAddItemClient extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem('blockSettings:table', tableBorderedSettingsItem.name, tableBorderedSettingsItem)
  }
}

export default PluginSchemaSettingsAddItemClient;
