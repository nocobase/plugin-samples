import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsFormPage = () => {
  const { data, loading } = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'samplesMapConfiguration:get',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
