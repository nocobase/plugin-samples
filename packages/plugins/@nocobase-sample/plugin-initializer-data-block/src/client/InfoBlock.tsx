import React, { FC } from 'react';
import { SchemaInitializerItemType, SchemaSettings, useCollection, useDataBlockRequest, useSchemaInitializer, withDynamicSchemaProps } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

export interface InfoBlockProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
}

export const InfoBlock: FC<InfoBlockProps> = withDynamicSchemaProps(({ collectionName, data }) => {
  return <div>
    <div>collection: {collectionName}</div>
    <div>data list: <pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
}, { displayName: 'InfoBlock' })

export const infoBlockSettings = new SchemaSettings({
  name: 'blockSettings:info',
  items: [
    {
      name: 'remove',
      type: 'remove',
    }
  ]
})

export function useInfoBlockProps() {
  const collection = useCollection();
  const { data, loading } = useDataBlockRequest();

  return {
    collectionName: collection.name,
    data: data?.data,
    loading: loading
  }
}

export function getInfoBlockSchema({ dataSource = 'main', collection }) {
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
        'x-use-component-props': 'useInfoBlockProps',
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
