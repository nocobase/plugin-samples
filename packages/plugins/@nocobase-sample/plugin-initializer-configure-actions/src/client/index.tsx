import { Plugin } from '@nocobase/client';

import { configureActionsInitializer } from './configureActionsInitializer';
import { customRefreshActionSettings } from './configureActionsInitializer/items/customRefreshAction/customRefreshActionSettings';

import { Info2 } from './InfoBlock';
import { infoInitializerItem } from './infoBlockInitializerItem';
import { useInfoProps } from './infoBlockSchema';
import { infoSettings } from './infoBlockSettings';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer)
    this.app.schemaSettingsManager.add(customRefreshActionSettings);

    this.app.addComponents({ Info2 });
    this.app.addScopes({ useInfoProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerConfigureActionsClient;
