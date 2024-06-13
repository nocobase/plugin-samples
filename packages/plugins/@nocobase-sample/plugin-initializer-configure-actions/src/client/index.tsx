import { Plugin } from '@nocobase/client';
import { infoInitializerItem, useCustomRefreshActionProps, configureActionsInitializer, customRefreshActionSettings } from './initializer';
import { InfoV2 } from './component';
import { useInfoProps } from './schema';
import { infoSettings } from './settings';

export class PluginInitializerConfigureActionsClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.add(configureActionsInitializer)
    this.app.schemaSettingsManager.add(customRefreshActionSettings);

    this.app.addComponents({ InfoV2 });
    this.app.addScopes({ useInfoProps, useCustomRefreshActionProps });

    this.app.schemaSettingsManager.add(infoSettings);

    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${infoInitializerItem.name}`, infoInitializerItem)
  }
}

export default PluginInitializerConfigureActionsClient;
