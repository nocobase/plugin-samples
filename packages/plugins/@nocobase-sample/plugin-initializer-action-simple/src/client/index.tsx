import { Plugin } from '@nocobase/client';
import { useDocumentActionProps } from './schema';
import { documentActionSettings } from './settings';
import { createDocumentActionInitializerItem } from './initializer';

export class PluginInitializerActionSimpleClient extends Plugin {
  async load() {
    this.app.addScopes({ useDocumentActionProps });
    this.app.schemaSettingsManager.add(documentActionSettings);
    this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionSimpleClient;
