import { Plugin } from '@nocobase/client';
import { TimelineBlock } from './TimelineBlock';
import { useTimelineBlockProps } from './timelineSchema';
import { timelineSettings } from './timelineSettings';
import { timelineInitializerItem } from './timelineInitializerItem';

export class PluginInitializerDataBlockModalClient extends Plugin {
  async load() {
    this.app.addComponents({ TimelineBlock })
    this.app.addScopes({ useTimelineBlockProps });
    this.app.schemaSettingsManager.add(timelineSettings)
    this.app.schemaInitializerManager.addItem('page:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `dataBlocks.${timelineInitializerItem.name}`, timelineInitializerItem);
  }
}

export default PluginInitializerDataBlockModalClient;
