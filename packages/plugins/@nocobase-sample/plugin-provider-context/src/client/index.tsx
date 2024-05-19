import React from 'react';
import { Plugin } from '@nocobase/client';

import { FeaturesProvider, useFeature } from './FeaturesProvider';

export { useFeatures, useFeature } from './FeaturesProvider';

const TestPage = () => {
  const feature1 = useFeature('feature1');
  const feature2 = useFeature('feature2');

  return (
    <div>
      <h1>Feature1: {feature1 ? 'Enabled' : 'Disabled'}</h1>
      <h1>Feature2: {feature2 ? 'Enabled' : 'Disabled'}</h1>
    </div>
  );
};

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)

    this.app.router.add(`admin.features-test`, {
      path: '/admin/features-test',
      Component: TestPage,
    })
  }
}

export default PluginProviderContextClient;
