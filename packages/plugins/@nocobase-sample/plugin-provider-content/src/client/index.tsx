import { Plugin } from '@nocobase/client';
import { TopAnnouncement } from './TopAnnouncement';

export class PluginProviderContentClient extends Plugin {
  async load() {
    this.app.addProvider(TopAnnouncement)
  }
}

export default PluginProviderContentClient;
