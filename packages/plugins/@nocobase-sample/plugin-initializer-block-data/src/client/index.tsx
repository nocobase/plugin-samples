import { Plugin } from '@nocobase/client';

import { Info } from './component';
import { infoInitializerItem } from './initializer';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';

export class PluginDataBlockInitializerClient extends Plugin {
  async load() {
    this.app.addComponents({ Info });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginDataBlockInitializerClient;
