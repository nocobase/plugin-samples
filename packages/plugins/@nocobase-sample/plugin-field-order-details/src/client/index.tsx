import { Plugin } from '@nocobase/client';

import { OrderDetails } from './component';
import { FiledComponentName } from './constants';
import { orderDetailsSettings } from './settings';
import { orderDetailsInitializerItem } from './initializer'

export class PluginFieldOrderDetailsClient extends Plugin {
  async load() {
    this.app.addComponents({ [FiledComponentName]: OrderDetails })
    this.app.schemaSettingsManager.add(orderDetailsSettings);
    this.app.schemaInitializerManager.addItem('form:configureFields', orderDetailsInitializerItem.name, orderDetailsInitializerItem);
  }
}

export default PluginFieldOrderDetailsClient;
