import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { FormOutlined } from '@ant-design/icons';
import { getFormV3Schema } from './FormV3.schema'
import { FormV3BlockName } from './constants';
import { useT } from './locale';

export const formV3InitializerItem: SchemaInitializerItemType = {
  name: FormV3BlockName,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(FormV3BlockName),
      icon: <FormOutlined />,
      componentType: FormV3BlockName,
      onCreateBlockSchema({ item }) {
        insert(getFormV3Schema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
