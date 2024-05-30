import { Plugin } from '@nocobase/client';
import { ImageBlock } from './ImageBlock';
import { imageBlockInitializerItem } from './imageBlockInitializerItem';
import { imageBlockSettings } from './imageBlockSettings';

export class PluginInitializerBlockSimpleClient extends Plugin {
  async load() {
    this.app.addComponents({ ImageBlock })
    this.app.schemaSettingsManager.add(imageBlockSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${imageBlockInitializerItem.name}`, imageBlockInitializerItem)
  }
}

export default PluginInitializerBlockSimpleClient;
