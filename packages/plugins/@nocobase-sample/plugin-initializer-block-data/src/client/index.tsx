import { Plugin } from '@nocobase/client';
import { InfoBlock } from './InfoBlock';
import { useInfoBlockProps } from './infoBlockSchema';
import { infoBlockSettings } from './infoBlockSettings';
import { infoBlockInitializerItem } from './infoBlockInitializerItem';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ InfoBlock });
    this.app.addScopes({ useInfoBlockProps });

    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
