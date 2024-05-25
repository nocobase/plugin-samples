import { Plugin } from '@nocobase/client';
import { createDocumentActionInitializerItem, documentActionSettings, useDocumentActionProps } from './DocumentAction';

export class PluginInitializerSimpleActionClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.schemaSettingsManager.add(documentActionSettings);
    this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerSimpleActionClient;
