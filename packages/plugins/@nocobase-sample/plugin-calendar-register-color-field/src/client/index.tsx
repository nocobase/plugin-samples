import { Plugin } from '@nocobase/client';
import PluginCalendarClient from '@nocobase/plugin-calendar/client';
import { useGetColor } from './useGetColor';

export class PluginCalendarRegisterColorFieldClient extends Plugin {
  async load() {
    const plugin = this.pm.get(PluginCalendarClient);
    plugin.registerColorFieldInterface('color', {
      useGetColor,
    });
  }
}

export default PluginCalendarRegisterColorFieldClient;
