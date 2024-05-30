import React from 'react';
import { SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export const InfoBlock = ({ children }) => {
  return <div>{children}</div>
}

export const infoBlockSettings = new SchemaSettings({
  name: 'blockSettings:info',
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
        'x-component': 'InfoBlock',
        properties: {
          fields: {
            type: 'void',
            'x-component': 'Grid',
            'x-initializer': 'info:configureFields',
          }
        }
      }
    }
  }
}

export const infoBlockInitializerItem: SchemaInitializerItemType = {
  name: 'InfoBlock',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info',
      icon: <CodeOutlined />,
      componentType: 'Info',
      onCreateBlockSchema({ item }) {
        insert(getInfoBlockSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
