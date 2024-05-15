import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import {
  ActionProps,
  DataBlockProviderProps,
  ExtendCollectionsProvider,
  ISchema,
  SchemaComponent,
  useCollection,
  useCollectionRecordData,
  useDataBlockResource,
} from '@nocobase/client';
import { uid } from '@nocobase/utils/client';
import { App as AntdApp } from 'antd';
import React, { useMemo } from 'react';
import { useCustomContext } from './CustomContextProvider';

// TODO: 现在这个需要 client 这里手写
const sampleTables1 = {
  name: 'sampleTables1',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      interface: 'input',
      name: 'title',
      uiSchema: {
        // BUG: 这里的参数 CollectionField 那里没正确处理
        type: 'string',
        title: 'Title',
        default: 'aaa',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};

const schema: ISchema = {
  type: 'void',
  // TODO: 这个 name 需要优化，根节点这个需要随机处理，以防冲突
  name: uid(),
  properties: {
    data: {
      type: 'void',
      'x-component': 'CardItem',
      'x-decorator': 'DataBlockProvider',
      'x-use-decorator-props': 'useDataBlockProviderProps',
      properties: {
        test: {
          type: 'void',
          'x-component': 'FormV2',
          'x-use-component-props': 'useFormBlockProps',
          properties: {
            title: {
              'x-decorator': 'FormItem',
              'x-component': 'CollectionField',
            },
            button: {
              type: 'void',
              'x-component': 'Action',
              title: 'Submit',
              'x-use-component-props': 'useSubmitActionProps',
            },
          },
        },
      },
    },
  },
};

const useDataBlockProviderProps = (): DataBlockProviderProps => {
  const result = useCustomContext();
  // TODO: 实际情况，数据并不是直接从 sampleTables1:get 获取的，而是从上下文里获取
  return {
    collection: 'sampleTables1',
    action: 'get', // BUG: 这里不应该有 get，因为数据是通过 record 对接的
    record: result.data?.['data'],
  };
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  // BUG: recordData 的更新导致 Form 重渲染，title 等参数都丢失了
  const form = useMemo(
    () =>
      createForm({
        initialValues: recordData,
      }),
    [recordData],
  );
  return {
    form,
  };
};

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  // TODO: AntdApp 这个用法应该合并到内核里
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  const result = useCustomContext();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
      // 更新上下文
      result.refresh();
      message.success('OK');
    },
  };
};

export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[sampleTables1]}>
      <SchemaComponent schema={schema} scope={{ useDataBlockProviderProps, useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
