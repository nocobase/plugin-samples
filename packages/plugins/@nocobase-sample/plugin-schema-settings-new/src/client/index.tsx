import { Plugin } from '@nocobase/client';
import { ImageV2 } from './component';
import { useImageV2Props } from './schema';
import { imageInitializerItem } from './initializer';
import { imageSettings } from './settings';

export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageV2 })
    this.app.addScopes({ useImageV2Props })

    this.app.schemaSettingsManager.add(imageSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}

export default PluginSchemaSettingsNewClient;
