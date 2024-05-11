import React from 'react';
import { Plugin } from '@nocobase/client';
import { Link } from 'react-router-dom'

// @ts-ignore
import { name } from '../../package.json';

const PluginSettingPage = () => <div>
  <Link to={`/admin/${name}-detail`}>details</Link>
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Different Layout',
      icon: 'ApiOutlined',
      Component: PluginSettingPage,
    });

    this.app.router.add(`admin.${name}-details`, {
      path: `/admin/${name}-detail`,
      Component: () => <div>detail</div>,
    });
  }
}

export default PluginAddSettingPageLayoutRoutesClient;
