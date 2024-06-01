import { Plugin } from '@nocobase/client';
import { InfoBlock3, infoBlockSettings, infoBlockInitializerItem } from './InfoBlock';
import { InfoItem, configureFields, infoItemSettings } from './configureFields'

export class PluginInitializerConfigureFieldsClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock3, InfoItem });

    this.app.schemaSettingsManager.add(infoBlockSettings, infoItemSettings);

    this.app.schemaInitializerManager.add(configureFields);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
  }
}

export default PluginInitializerConfigureFieldsClient;
