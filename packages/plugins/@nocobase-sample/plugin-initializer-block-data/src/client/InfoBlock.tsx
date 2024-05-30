import React, { FC } from 'react';
import { withDynamicSchemaProps } from '@nocobase/client'

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
