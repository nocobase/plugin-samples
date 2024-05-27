import { Plugin } from '@nocobase/client';
import { TimelineBlock, useTimelineBlockProps } from './TimelineBlock';
import React from 'react';
import { TimelineInitializerConfigForm } from './TimelineInitializerConfigForm';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock })
    this.app.addScopes({ useTimelineBlockProps });
    this.app.router.add('admin.data-block', {
      path: '/admin/data-block-modal',
      Component: () => {
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <TimelineInitializerConfigForm collection='users' />
          </div>
        </>
      }
    })
  }
}

export default PluginInitializerDataBlockModalClient;
