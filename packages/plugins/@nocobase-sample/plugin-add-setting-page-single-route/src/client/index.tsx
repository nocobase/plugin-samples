import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const MySettingPage = () => <div>Hello Setting page</div>;

export class PluginAddSettingPageSingleRouteClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Single Route',
      icon: 'ApiOutlined',
      Component: MySettingPage,
    });
  }
}

export default PluginAddSettingPageSingleRouteClient;
