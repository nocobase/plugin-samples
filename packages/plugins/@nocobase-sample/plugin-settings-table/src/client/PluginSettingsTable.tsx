import React, { useMemo } from 'react';
import { ActionProps, ISchema, useActionContext, useCollection, useCollectionRecord, useCollectionRecordData, useDataBlockRequest, useDataBlockResource } from '@nocobase/client';
import { uid } from '@formily/shared'
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

const samplesEmailTemplatesCollection = {
  name: 'samplesEmailTemplates',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'subject',
      interface: 'input',
      uiSchema: {
        type: 'string',
        title: 'Subject',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'content',
      interface: 'richText',
      uiSchema: {
        type: 'string',
        title: 'Content',
        required: true,
        'x-component': 'RichText',
      },
    },
  ],
};

const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();
  const collection = useCollection();
  const globalSettingsTableRequest = usePluginSettingsTableRequest();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      if (values[collection.filterTargetKey]) {
        await resource.update({
          values,
          filterByTk: values[collection.filterTargetKey],
        });
      } else {
        await resource.create({
          values,
        });
      }
      await runAsync()
      await globalSettingsTableRequest.runAsync();
      message.success('Saved successfully!');
      setVisible(false);
    },
  };
};

const useEditFormProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () =>
      createForm({
        initialValues: recordData,
      }),
    [],
  );

  return {
    form,
  };
}

function useDeleteActionProps(): ActionProps {
  const { message } = AntdApp.useApp();
  const record = useCollectionRecordData();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();
  const globalSettingsTableRequest = usePluginSettingsTableRequest();
  const collection = useCollection();
  return {
    confirm: {
      title: 'Delete',
      content: 'Are you sure you want to delete it?',
    },
    async onClick() {
      await resource.destroy({
        filterByTk: record[collection.filterTargetKey]
      });
      await runAsync();
      await globalSettingsTableRequest.runAsync();
      message.success('Deleted!');
    },
  };
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: samplesEmailTemplatesCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'Action',
          title: 'Add New',
          'x-align': 'right',
          'x-component-props': {
            type: 'primary',
          },
          properties: {
            drawer: {
              type: 'void',
              'x-component': 'Action.Drawer',
              title: 'Add new',
              properties: {
                form: {
                  type: 'void',
                  'x-component': 'FormV2',
                  properties: {
                    subject: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                      required: true,
                    },
                    content: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                      required: true,
                    },
                    footer: {
                      type: 'void',
                      'x-component': 'Action.Drawer.Footer',
                      properties: {
                        submit: {
                          title: 'Submit',
                          'x-component': 'Action',
                          'x-use-component-props': 'useSubmitActionProps',
                        },
                      }
                    }
                  },
                },
              },
            },
          },
        },
      }
    },
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        subject: {
          type: 'void',
          title: 'Subject',
          'x-component': 'TableV2.Column',
          properties: {
            subject: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        content: {
          type: 'void',
          title: 'Content',
          'x-component': 'TableV2.Column',
          properties: {
            content: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        actions: {
          type: 'void',
          title: 'Actions',
          'x-component': 'TableV2.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                edit: {
                  type: 'void',
                  title: 'Edit',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    openMode: 'drawer',
                    icon: 'EditOutlined',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: 'Edit',
                      'x-component': 'Action.Drawer',
                      properties: {
                        form: {
                          type: 'void',
                          'x-component': 'FormV2',
                          'x-use-component-props': 'useEditFormProps',
                          properties: {
                            subject: {
                              type: 'string',
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                              required: true,
                            },
                            content: {
                              type: 'string',
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                              required: true,
                            },
                            footer: {
                              type: 'void',
                              'x-component': 'Action.Drawer.Footer',
                              properties: {
                                submit: {
                                  title: 'Submit',
                                  'x-component': 'Action',
                                  'x-use-component-props': 'useSubmitActionProps',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                delete: {
                  type: 'void',
                  title: 'Delete',
                  'x-component': 'Action.Link',
                  'x-use-component-props': 'useDeleteActionProps',
                }
              },
            }
          },
        }
      },
    },
  },
}

export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[samplesEmailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
