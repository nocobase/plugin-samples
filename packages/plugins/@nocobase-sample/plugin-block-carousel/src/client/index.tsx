import { Plugin, SchemaComponent } from '@nocobase/client';
import React from 'react';
import { Carousel } from './Carousel';
import { carouselBlockSchema, useCarouselBlockProps } from './carouselBlockSchema';
import { carouselSettings } from './carouselSettings';
import { carouselInitializerItem } from './carouselInitializerItem';

export class PluginBlockCarouselClient extends Plugin {
  async load() {
    this.app.addComponents({ Carousel })
    this.app.schemaSettingsManager.add(carouselSettings);
    this.app.addScopes({ useCarouselBlockProps });

    this.app.schemaInitializerManager.addItem('page:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
    this.app.schemaInitializerManager.addItem('popup:addNew:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem)
    this.app.schemaInitializerManager.addItem('mobilePage:addBlock', `otherBlocks.${carouselInitializerItem.name}`, carouselInitializerItem);

    this.app.router.add('admin.carousel-component', {
      path: '/admin/carousel-component',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} height={100} />
          </div>

          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} objectFit='contain' />
          </div>


          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Carousel images={images} autoplay />
          </div>
        </>
      }
    });
    this.app.router.add('admin.carousel-schema', {
      path: '/admin/carousel-schema',
      Component: () => {
        const images = [{ url: 'https://picsum.photos/id/1/1200/300' }, { url: 'https://picsum.photos/id/2/1200/300' }];
        return <>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test: carouselBlockSchema } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test: { ...carouselBlockSchema, 'x-decorator-props': { carousel: { images, height: 100 } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test: { ...carouselBlockSchema, 'x-decorator-props': { carousel: { images, objectFit: 'contain' } } } } }} />
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <SchemaComponent schema={{ properties: { test: { ...carouselBlockSchema, 'x-decorator-props': { carousel: { images, autoplay: true } } } } }} />
          </div>
        </>
      }
    });
  }
}

export default PluginBlockCarouselClient;
