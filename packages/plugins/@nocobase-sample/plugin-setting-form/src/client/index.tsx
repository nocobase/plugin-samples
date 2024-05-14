import React, { FC } from 'react';
import { Plugin, createPluginSettingForm, usePluginSettingData } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

const PluginSettingForm = createPluginSettingForm({
  packageName: name,
  fields: {
    key: {
      type: 'string',
      title: 'Key',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    secret: {
      type: 'string',
      title: 'Secret',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    }
  }
});

const PluginSettingFormDemoPage: FC = () => {
  const { loading, data } = usePluginSettingData(name);

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Setting Form',
      icon: 'FormOutlined',
      Component: PluginSettingForm,
    });

    this.app.router.add(`admin.${name}`, {
      path: '/admin/plugin-setting-form-demo',
      Component: PluginSettingFormDemoPage,
    })
  }
}

export default PluginSettingFormClient;
