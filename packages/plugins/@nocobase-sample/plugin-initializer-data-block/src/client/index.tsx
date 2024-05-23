import { Plugin } from '@nocobase/client';
import { InfoBlock, infoBlockSettings, infoInitializerItem, useInfoBlockProps } from './InfoBlock';

export class PluginInitializerDataBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.addScopes({ useInfoBlockProps });

    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerDataBlockClient;
