import { Plugin } from '@nocobase/client';
import { Info3, infoSettings, infoInitializerItem } from './InfoBlock';
import { InfoItem, configureFields, infoItemSettings } from './configureFields'

export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    this.app.addComponents({ Info3, InfoItem });

    this.app.schemaSettingsManager.add(infoSettings, infoItemSettings);

    this.app.schemaInitializerManager.add(configureFields);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerConfigureFieldsClient;
