import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsFormContext = createContext<UseRequestResult<{ data?: { key: string; secret: string } }>>(null as any);

export const PluginSettingsFormProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const request = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'samplesMapConfiguration:get',
  });

  console.log('PluginSettingsFormProvider', request.data?.data);

  return <PluginSettingsFormContext.Provider value={request}>{children}</PluginSettingsFormContext.Provider>;
}

export const usePluginSettingsFormRequest = () => {
  return React.useContext(PluginSettingsFormContext);
};
