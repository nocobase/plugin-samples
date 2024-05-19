import { useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React, { FC, createContext, ReactNode } from 'react';

const FeaturesContext = createContext<Record<string, boolean>>({});

const mockRequest = () => new Promise((resolve) => {
  resolve({ data: { feature1: true, feature2: false } })
})

export const FeaturesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loading, data } = useRequest<{ data: Record<string, boolean> }>(mockRequest);

  if (loading) return <Spin />;

  return <FeaturesContext.Provider value={data.data}>{children}</FeaturesContext.Provider>;
};

export const useFeatures = () => React.useContext(FeaturesContext);

export const useFeature = (feature: string) => {
  const features = useFeatures();
  return features[feature];
}
