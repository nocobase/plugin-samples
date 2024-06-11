import { Plugin } from '@nocobase/client';
import { Image2 } from './ImageBlock';
import { imageInitializerItem } from './imageBlockInitializerItem';
import { useImageProps } from './imageBlockSchema';
import { imageSettings } from './imageBlockSettings';

export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    this.app.addComponents({ Image2 })
    this.app.addScopes({ useImageProps })

    this.app.schemaSettingsManager.add(imageSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageInitializerItem.name}`, imageInitializerItem)
  }
}

export default PluginSchemaSettingsNewClient;
