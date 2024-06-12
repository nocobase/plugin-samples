import React, { FC } from 'react';
import { SchemaComponentOptions, withDynamicSchemaProps } from '@nocobase/client'
import { useCustomRefreshActionProps } from './configureActionsInitializer/items/customRefreshAction/customRefreshActionSchema';

export interface InfoProps {
  collectionName: string;
  data?: any[];
  loading?: boolean;
  children?: React.ReactNode;
}

export const Info2: FC<InfoProps> = withDynamicSchemaProps(({ children, collectionName, data }) => {
  return <div>
    <SchemaComponentOptions scope={{ useCustomRefreshActionProps }}>
      {children}
    </SchemaComponentOptions>
    <div>data length: {data?.length}</div>
  </div>
}, { displayName: 'Info2' })
