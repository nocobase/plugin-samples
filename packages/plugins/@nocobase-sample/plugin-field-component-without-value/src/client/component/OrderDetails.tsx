import { observer } from '@formily/react'
import { Spin, Empty } from 'antd';
import React, { FC } from 'react';
import { useForm } from '@formily/react';
import { FieldComponentName } from '../constants';
import { useRequest } from '@nocobase/client';

export interface OrderDetailsProps {
  orderField?: string;
}

export const OrderDetails: FC<OrderDetailsProps> = observer(({ orderField }) => {
  const form = useForm();
  const value = orderField ? form.values[orderField] : undefined;

  const { data, loading } = useRequest<{ data: any[] }>({ url: `https://jsonplaceholder.typicode.com/todos/${value}` }, {
    ready: !!value,
    refreshDeps: [orderField, value],
  })

  if (!orderField) return <div style={{ padding: 20 }}>Please select order Field</div>

  if (loading) {
    return <div style={{ textAlign: 'center', height: 200 }}><Spin /></div>
  }

  if (!data) return <Empty />;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}, { displayName: FieldComponentName });
