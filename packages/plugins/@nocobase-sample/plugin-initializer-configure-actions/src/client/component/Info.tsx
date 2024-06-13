import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'
import { BlockName } from '../constants';

export interface InfoV2Props {
  collectionName: string;
  data?: any[];
  loading?: boolean;
  children?: React.ReactNode;
}

export const InfoV2: FC<InfoV2Props> = withDynamicSchemaProps(({ children, collectionName, data }) => {
  return <div>
    {children}
    <div>data length: {data?.length}</div>
  </div>
}, { displayName: BlockName })
