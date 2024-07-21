import React from 'react';
import { SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export const Info3 = ({ children }) => {
  return <div>{children}</div>
}

export const infoSettings = new SchemaSettings({
  name: 'blockSettings:info3',
  items: [
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
})

function getInfoSchema({ dataSource, collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-settings': infoSettings.name,
    "x-toolbar": "BlockSchemaToolbar",
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'Info3',
        properties: {
          fields: {
            type: 'void',
            'x-component': 'Grid',
            'x-initializer': 'info:configureFields3',
          }
        }
      }
    }
  }
}

export const infoInitializerItem: SchemaInitializerItemType = {
  name: 'Info3',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info3',
      icon: <CodeOutlined />,
      componentType: 'Info3',
      onCreateBlockSchema({ item }) {
        insert(getInfoSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
