import { Plugin } from '@nocobase/client';

import { useOpenDocumentActionProps } from './schema'
import { createDocumentActionModalInitializerItem } from './initializer';
import { documentActionModalSettings } from './settings';

export class PluginInitializerActionModalClient extends Plugin {
  async load() {
    this.app.addScopes({ useOpenDocumentActionProps })
    this.app.schemaSettingsManager.add(documentActionModalSettings);
    this.app.schemaInitializerManager.addItem('table:configureActions', 'open-document', createDocumentActionModalInitializerItem('table-v2'));
    this.app.schemaInitializerManager.addItem('details:configureActions', 'open-document', createDocumentActionModalInitializerItem('details'));
    this.app.schemaInitializerManager.addItem('createForm:configureActions', 'open-document', createDocumentActionModalInitializerItem('form-v2'));
  }
}

export default PluginInitializerActionModalClient;
