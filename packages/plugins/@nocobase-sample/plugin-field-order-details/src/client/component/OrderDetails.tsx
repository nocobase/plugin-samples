import { observer, useForm } from '@formily/react';
import { useRequest } from '@nocobase/client';
import { Empty, Spin } from 'antd';
import React, { FC } from 'react';
import { FiledComponentName } from '../constants';

export interface OrderDetailsProps {
  orderField?: string;
}

export const OrderDetails: FC<OrderDetailsProps> = observer(({ orderField }) => {
  const form = useForm();
  const value = orderField ? form.values[orderField] : undefined;

  const { data, loading } = useRequest<{ data: any[] }>({ url: `remoteData:get/${value}` }, {
    ready: !!orderField,
    refreshDeps: [orderField, value],
  })

  if (!orderField) return <div style={{ padding: 20 }}>请先选择 Order Field</div>

  if (loading) {
    return <div style={{ textAlign: 'center', height: 200 }}><Spin /></div>
  }

  if (!data?.data) return <Empty />;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>;
}, { displayName: FiledComponentName });
