import React from 'react';
import { Outlet } from 'react-router-dom';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const TokenPage = () => <div>Token Page</div>

const TemplatePage = () => <div>Template Page</div>

export class PluginAddSettingPageTabsRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Tabs Routes',
      icon: 'ApiOutlined',
      Component: Outlet, // 可省略或者使用自定义组件
    });

    this.app.pluginSettingsManager.add(`${name}.token`, {
      title: 'Token Page',
      Component: TokenPage,
      sort: 1,
    });

    this.app.pluginSettingsManager.add(`${name}.template`, {
      title: 'Template Page',
      Component: TemplatePage,
      sort: 2,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute`, {
      title: 'Test',
      Component: Outlet, // 可省略或者使用自定义组件
      sort: 3,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.a`, {
      title: 'Test A',
      Component: () => <div>Test A page</div>
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.b`, {
      title: 'Test B',
      Component: () => <div>Test B page</div>
    });
  }
}

export default PluginAddSettingPageTabsRoutesClient;
