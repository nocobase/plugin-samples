import { Plugin } from '@nocobase/client';
import { ImageBlock2 } from './ImageBlock';
import { imageBlockInitializerItem } from './imageBlockInitializerItem';
import { imageBlockSettings } from './imageBlockSettings';
import { useImageBlockProps } from './imageBlockSchema';

export class PluginSchemaSettingsNewClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageBlock2 })
    this.app.addScopes({ useImageBlockProps })

    this.app.schemaSettingsManager.add(imageBlockSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
  }
}

export default PluginSchemaSettingsNewClient;
