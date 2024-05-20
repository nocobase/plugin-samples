import { Plugin } from '@nocobase/client';
import { DocumentAction, createDocumentActionInitializerItem, documentActionSettings } from './DocumentAction'

export class PluginInitializerActionClient extends Plugin {
  async load() {
    this.app.addComponents({ DocumentAction })
    this.app.schemaSettingsManager.add(documentActionSettings)
    this.app.schemaInitializerManager.addItem('table:configureActions', 'document', createDocumentActionInitializerItem('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'document', createDocumentActionInitializerItem('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'document', createDocumentActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionClient;
