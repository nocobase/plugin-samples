import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';
import { getInfoBlockSchema } from './infoBlockSchema'

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
