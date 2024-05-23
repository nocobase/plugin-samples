import { Plugin } from '@nocobase/client';
import { createDocumentActionInitializerItem, documentActionSettings } from './DocumentAction';

export class PluginInitializerSimpleActionClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentActionSettings)
    this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
  }
}

export default PluginInitializerSimpleActionClient;
