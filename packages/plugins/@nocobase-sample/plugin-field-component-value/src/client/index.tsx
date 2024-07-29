import { Plugin } from '@nocobase/client';

import { QRCode } from './QRCode';
import { qrCodeComponentFieldSettings } from './settings';
import { tStr } from './locale';

export class PluginFieldComponentValueClient extends Plugin {
  async load() {
    this.app.addComponents({ QRCode });
    this.schemaSettingsManager.add(qrCodeComponentFieldSettings);
    this.app.addFieldInterfaceComponentOption('url', {
      label: tStr('QRCode'),
      value: 'QRCode',
    });
  }
}

export default PluginFieldComponentValueClient;
