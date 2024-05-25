import { Plugin } from '@nocobase/client';
import { createDocumentModalActionSchema, documentModalActionSettings } from './DocumentModalAction';

export class PluginInitializerModalActionClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentModalActionSettings);
    this.app.schemaInitializerManager.addItem('table:configureActions', 'open-document', createDocumentModalActionSchema('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'open-document', createDocumentModalActionSchema('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'open-document', createDocumentModalActionSchema('form-v2'));
  }
}

export default PluginInitializerModalActionClient;
