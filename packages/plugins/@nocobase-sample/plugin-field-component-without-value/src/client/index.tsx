import { Plugin, SchemaComponent } from '@nocobase/client';

import { OrderDetails } from './component';
import { FieldComponentName } from './constants';
import { orderDetailsSettings } from './settings';
import { orderDetailsInitializerItem } from './initializer'
import React from 'react';
import { getOrderDetailsSchema } from './schema';

export class PluginFieldComponentWithoutValueClient extends Plugin {
  async load() {
    this.app.addComponents({ [FieldComponentName]: OrderDetails })

    function Demo() {
      const schema = {
        type: 'void',
        name: 'root',
        properties: {
          test: {
            type: 'void',
            'x-component': 'FormV2',
            properties: {
              username: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                title: 'Username',
                required: true,
              },
              orderDetails: getOrderDetailsSchema('username')
            },
          },
        },
      };

      return <SchemaComponent schema={schema} />;
    }

    this.app.router.add('admin.order-details-schema', {
      path: '/admin/order-details-schema',
      Component: Demo
    })

    this.app.schemaSettingsManager.add(orderDetailsSettings);
    this.app.schemaInitializerManager.addItem('form:configureFields', orderDetailsInitializerItem.name, orderDetailsInitializerItem);
  }
}

export default PluginFieldComponentWithoutValueClient;
