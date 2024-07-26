import { Plugin } from '@nocobase/server';
import { EncryptionField } from './encryption-field';
import { $encryptionEq } from './operators/eq';
import { $encryptionNe } from './operators/ne';

export class PluginFieldInterfaceServer extends Plugin {
  async load() {
    this.db.registerFieldTypes({
      encryption: EncryptionField,
    });

    this.db.registerOperators({
      $encryptionEq,
      $encryptionNe,
    });
  }
}

export default PluginFieldInterfaceServer;
