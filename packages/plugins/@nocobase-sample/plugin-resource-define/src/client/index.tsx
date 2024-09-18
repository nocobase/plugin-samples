import { Plugin, useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React from 'react';

// @ts-ignore
import { name } from '../../package.json';

function TestRequest1() {
  const { data, loading } = useRequest({
    url: 'testresourceManagerDefine:send1',
  });
  if (loading) {
    return <Spin />
  }
  return <div>Response1: {data?.['data']}</div>
}

function TestRequest2() {
  const { data, loading } = useRequest({
    url: 'testresourceManagerDefine:send2',
  });
  if (loading) {
    return <Spin />
  }
  return <div>Response2: {data?.['data']}</div>
}

function TestRequest3() {
  const { data, loading } = useRequest({
    url: 'testresourceManagerDefine:send3',
  });
  if (loading) {
    return <Spin />
  }
  return <div>Response3: {data?.['data']}</div>
}

function MySettingPage() {
  return (
    <div>
      <TestRequest1 />
      <TestRequest2 />
      <TestRequest3 />
    </div>
  )
}

export class PluginResourceDefineClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() { }

  // You can get and modify the app instance here
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'testresourceManagerDefine',
      icon: 'ApiOutlined',
      Component: MySettingPage,
    });
  }
}

export default PluginResourceDefineClient;
