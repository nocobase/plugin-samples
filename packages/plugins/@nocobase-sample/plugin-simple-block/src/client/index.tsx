import { Plugin } from '@nocobase/client';
import { CarouselBlock, CarouselInitializerItem, carouselSettings } from './CarouselBlock';

export class PluginSimpleBlockClient extends Plugin {
  async load() {
    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${CarouselInitializerItem.name}`, CarouselInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${CarouselInitializerItem.name}`, CarouselInitializerItem)
    this.app.addComponents({ CarouselBlock })
    this.app.schemaSettingsManager.add(carouselSettings)
  }
}

export default PluginSimpleBlockClient;
