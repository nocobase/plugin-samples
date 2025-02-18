import { Plugin } from '@nocobase/client';
import PluginCalendarClient from '@nocobase/plugin-calendar/client';
import { TitleRenderer } from './TitleRenderer';

export class PluginCalendarRegisterColorFieldClient extends Plugin {
  async load() {
    const plugin = this.pm.get(PluginCalendarClient);
    plugin.registerTitleFieldInterface('color', {
      TitleRenderer,
    });
  }
}

export default PluginCalendarRegisterColorFieldClient;
