import React from 'react';
import { SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export const InfoBlock3 = ({ children }) => {
  return <div>{children}</div>
}

export const infoBlockSettings = new SchemaSettings({
  name: 'blockSettings:info3',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})

function getInfoBlockSchema({ dataSource, collection }) {
  return {
    type: 'void',
    'x-decorator': 'DataBlockProvider',
    'x-decorator-props': {
      dataSource,
      collection,
      action: 'list',
    },
    'x-settings': infoBlockSettings.name,
    'x-component': 'CardItem',
    properties: {
      info: {
        type: 'void',
        'x-component': 'InfoBlock3',
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

export const infoBlockInitializerItem: SchemaInitializerItemType = {
  name: 'InfoBlock3',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info3',
      icon: <CodeOutlined />,
      componentType: 'Info3',
      onCreateBlockSchema({ item }) {
        insert(getInfoBlockSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
