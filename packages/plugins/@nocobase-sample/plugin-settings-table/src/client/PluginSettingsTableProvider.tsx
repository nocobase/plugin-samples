import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsTableContext = createContext<UseRequestResult<{ data?: any[] }>>(null as any);

export const PluginSettingsTableProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const request = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  console.log('PluginSettingsTableProvider', request.data?.data);

  return <PluginSettingsTableContext.Provider value={request}>{children}</PluginSettingsTableContext.Provider>;
}

export const usePluginSettingsTableRequest = () => {
  return React.useContext(PluginSettingsTableContext);
};
