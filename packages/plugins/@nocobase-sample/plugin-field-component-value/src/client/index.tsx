import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { generatePluginTranslationTemplate } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.dataSourceManager.collectionFieldInterfaceManager.addFieldInterfaceComponentOption('url', {
      label: generatePluginTranslationTemplate('QRCode'),
      value: 'QRCode',
    });
  }
}

export default PluginFieldComponentValueClient;
