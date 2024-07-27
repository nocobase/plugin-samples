import { Plugin } from '@nocobase/client';
import { EncryptionFieldInterface } from './EncryptionFieldInterface';

export class PluginFieldInterfaceClient extends Plugin {
  async load() {
    this.app.dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaces([EncryptionFieldInterface]);
  }
}

export default PluginFieldInterfaceClient;
