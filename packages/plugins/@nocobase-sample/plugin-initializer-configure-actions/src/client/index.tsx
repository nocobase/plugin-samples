import { Plugin } from '@nocobase/client';
import { InfoBlock2 } from './InfoBlock';
import { useInfoBlockProps } from './infoBlockSchema';
import { infoBlockSettings } from './infoBlockSettings';
import { infoBlockInitializerItem } from './infoBlockInitializerItem';
import { configureActionsInitializer } from './configureActionsInitializer';
import { customRefreshActionSettings } from './configureActionsInitializer/items/customRefreshAction/customRefreshActionSettings';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer)
    this.app.schemaSettingsManager.add(customRefreshActionSettings);

    this.app.addComponents({ InfoBlock2 });
    this.app.addScopes({ useInfoBlockProps });

    this.app.schemaSettingsManager.add(infoBlockSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoBlockInitializerItem.name}`, infoBlockInitializerItem)
  }
}

export default PluginInitializerConfigureActionsClient;
