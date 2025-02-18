import { Plugin } from '@nocobase/client';
import PluginFieldFormulaClient from '@nocobase/plugin-field-formula/client';

export class PluginFieldFormulaRegisterExpressionFieldClient extends Plugin {
  async load() {
    const plugin = this.pm.get(PluginFieldFormulaClient);
    plugin.registerExpressionFieldInterface('color');
  }
}

export default PluginFieldFormulaRegisterExpressionFieldClient;
