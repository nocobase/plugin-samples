import { Plugin } from '@nocobase/client';
import { ImageBlock, imageBlockSettings, imageInitializerItem } from './ImageBlock';

export class PluginInitializerSimpleBlockClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageBlock })
    this.app.schemaSettingsManager.add(imageBlockSettings)

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}

export default PluginInitializerSimpleBlockClient;
