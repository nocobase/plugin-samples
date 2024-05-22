import React from 'react';
import { SchemaComponentOptions, SchemaInitializerItemType, SchemaSettings, useDataBlockRequest, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';
import { useCustomRequestActionProps } from './configureActions'

export const InfoBlock = ({ children }) => {
  const { data } = useDataBlockRequest<any[]>();
  return <SchemaComponentOptions scope={{ useCustomRequestActionProps }}>
    <div>
      {children}
      <div>data length: {data?.data?.length}</div>
    </div>
  </SchemaComponentOptions>
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
          actions: {
            type: 'void',
            'x-component': 'ActionBar',
            'x-initializer': 'info:configureActions',
            'x-component-props': {
              layout: 'two-columns',
            }
          }
        }
      }
    }
  }
}

export const infoInitializerItem: SchemaInitializerItemType = {
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
