import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';
import { getInfoBlockSchema } from './infoBlockSchema'

export const infoBlockInitializerItem: SchemaInitializerItemType = {
  name: 'InfoBlock2',
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Info2',
      icon: <CodeOutlined />,
      componentType: 'Info2',
      onCreateBlockSchema({ item }) {
        insert(getInfoBlockSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
