import React from 'react';
import { useMemo } from 'react';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { uid } from '@formily/shared'
import { ActionProps, ISchema, useCollection, useCollectionRecordData, useDataBlockResource, ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';

import { usePluginSettingsFormRequest } from './PluginSettingsFormProvider';

const mapConfigurationCollection = {
  name: 'samplesMapConfiguration',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'key',
      interface: 'input',
      uiSchema: {
        type: 'string',
        title: 'Title',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'secret',
      interface: 'input',
      uiSchema: {
        type: 'string',
        title: 'Secret',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'DataBlockProvider',
  'x-decorator-props': {
    collection: mapConfigurationCollection.name,
    action: 'get',
  },
  properties: {
    form: {
      type: 'void',
      'x-component': 'FormV2',
      'x-use-component-props': 'useFormBlockProps',
      properties: {
        key: {
          title: 'Title',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        secret: {
          title: 'Secret',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        footer: {
          type: 'void',
          'x-component': 'Action',
          title: 'Submit',
          'x-use-component-props': 'useSubmitActionProps',
        },
      },
    },
  },
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () => createForm({
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
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  const globalSettingsFormRequest = usePluginSettingsFormRequest();
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
      await globalSettingsFormRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};

export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[mapConfigurationCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
