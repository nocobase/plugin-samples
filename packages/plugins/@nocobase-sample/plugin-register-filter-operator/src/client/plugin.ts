import { Plugin } from '@nocobase/client';
import { CustomFieldInterface } from './custom-field';

export class PluginRegisterFilterOperatorClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([CustomFieldInterface]);
    this.app.jsonLogic.addOperation('$customOperator', (a, b) => {
      return a?.includes(b);
    });
  }
}

export default PluginRegisterFilterOperatorClient;
