import { Plugin } from '@nocobase/client';
import { Carousel } from './component';
import { carouselInitializerItem } from './initializer';
import { useCarouselBlockProps } from './schema';
import { carouselSettings } from './settings';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(carouselSettings);
    this.app.addScopes({ useCarouselBlockProps });

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem);
  }
}

export default PluginBlockCarouselClient;
