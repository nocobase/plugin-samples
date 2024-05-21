import React from 'react';
import { SchemaInitializerItemType, SchemaSettings, useCollection, useDataBlockRequest, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export const InfoBlock = () => {
  const collection = useCollection();
  const { data } = useDataBlockRequest();
  return <div>
    <div>collection: {collection.name}</div>
    <div>data list: <pre>{JSON.stringify(data?.data, null, 2)}</pre></div>
  </div>
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
