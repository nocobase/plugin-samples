import React from 'react';
import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client'
import { CodeOutlined } from '@ant-design/icons';

import { getInfoSchema } from '../schema'
import { useInfoTranslation } from '../locale';
import { BlockNameLowercase } from '../constants';

export const infoInitializerItem: SchemaInitializerItemType = {
  name: BlockNameLowercase,
  Component: 'DataBlockInitializer',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = useInfoTranslation();
    return {
      title: t('Info'),
      icon: <CodeOutlined />,
      componentType: 'Info',
      useTranslationHooks: useInfoTranslation,
      onCreateBlockSchema({ item }) {
        insert(getInfoSchema({ dataSource: item.dataSource, collection: item.name }))
      },
    };
  },
}
