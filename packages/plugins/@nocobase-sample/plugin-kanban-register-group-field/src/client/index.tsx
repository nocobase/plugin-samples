import { Plugin } from '@nocobase/client';
import PluginKanbanClient from '@nocobase/plugin-kanban/client';

export class PluginKanbanRegisterGroupFieldClient extends Plugin {
  async load() {
    const plugin = this.pm.get(PluginKanbanClient);
    plugin.registerGroupFieldInterface('collection', {
      useGetGroupOptions(collectionField) {
        return {
          loading: false,
          options: [
            {
              color: 'blue',
              value: 'users',
              label: 'Users',
            },
            {
              color: 'green',
              value: 'roles',
              label: 'Roles',
            },
          ],
        };
      },
    });
  }
}

export default PluginKanbanRegisterGroupFieldClient;
