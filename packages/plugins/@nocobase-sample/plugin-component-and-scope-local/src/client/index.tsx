import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    })
  }
}

export default PluginComponentAndScopeLocalClient;
