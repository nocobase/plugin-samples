import { Plugin } from '@nocobase/client';
import { createDocumenModaltActionInitializerItem, documentModalActionSettings } from './DocumentModalAction';

export class PluginInitializerModalActionClient extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(documentModalActionSettings);
    this.app.schemaInitializerManager.addItem('table:configureActions', 'open-document', createDocumenModaltActionInitializerItem('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'open-document', createDocumenModaltActionInitializerItem('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'open-document', createDocumenModaltActionInitializerItem('form-v2'));
  }
}

export default PluginInitializerModalActionClient;
