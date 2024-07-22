import React from 'react';
import { useForm } from '@formily/react';
import { ActionProps, Plugin, SchemaComponent } from '@nocobase/client';

import { FormV3 } from './FormV3';
import { useFormV3Props, getFormV3Schema } from './FormV3.schema';
import { formV3Settings } from './FormV3.settings';
import { formV3InitializerItem } from './FormV3.initializer';
import { formV3ConfigureActionsInitializer } from './FormV3.configActions';
import { formV3SubmitActionSettings, useFormV3SubmitActionProps } from './FormV3.configActions/items/submit';
import { formV3ConfigureFieldsInitializer } from './FormV3.configFields';

function useSubmitActionProps(): ActionProps {
  const form = useForm();

  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;

      console.log('values', values);
    },
  };
}
export class PluginBlockFormClient extends Plugin {
  async load() {
    this.app.addComponents({ FormV3 });
    this.app.addScopes({ useFormV3Props, useFormV3SubmitActionProps });
    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${formV3InitializerItem.name}`, formV3InitializerItem);
    this.app.schemaSettingsManager.add(formV3Settings, formV3SubmitActionSettings);
    this.app.schemaInitializerManager.add(formV3ConfigureActionsInitializer, formV3ConfigureFieldsInitializer);

    this.app.router.add('admin.block-form-component', {
      path: '/admin/block-form-component',
      Component: () => {
        return <FormV3>
          <SchemaComponent schema={{
            type: 'void',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              nickname: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Nickname',
              },
              password: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Password',
              },
              button: {
                type: 'void',
                'x-component': 'Action',
                title: 'Submit',
                'x-use-component-props': useSubmitActionProps,
              },
            }
          }} />
        </FormV3>
      }
    })

    this.app.router.add('admin.block-form-schema', {
      path: '/admin/block-form-schema',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{
              properties: {
                test: getFormV3Schema({
                  collection: 'users',
                  properties: {
                    username: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    nickname: {
                      type: 'string',
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    submit: {
                      type: 'void',
                      'x-component': 'Action',
                      title: 'Submit',
                      'x-use-component-props': useSubmitActionProps,
                    },
                  }
                })
              }
            }} />
          </div>
        </>
      }
    })
  }
}

export default PluginBlockFormClient;
