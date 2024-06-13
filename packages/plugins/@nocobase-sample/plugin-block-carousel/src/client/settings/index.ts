import { SchemaSettings, SchemaSettingsBlockTitleItem } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';
import { imagesSchemaSettingsItem } from './items/images';
import { heightSchemaSettingsItem } from './items/height';
import { objectFitSchemaSettingsItem } from './items/objectFit';
import { autoplaySchemaSettingsItem } from './items/autoplay';

export const carouselSettings = new SchemaSettings({
  name: `blockSettings:${BlockNameLowercase}`,
  items: [
    {
      name: 'editBlockTitle',
      Component: SchemaSettingsBlockTitleItem,
    },
    {
      name: 'divider1',
      type: 'divider'
    },
    imagesSchemaSettingsItem,
    heightSchemaSettingsItem,
    objectFitSchemaSettingsItem,
    autoplaySchemaSettingsItem,
    {
      name: 'divider2',
      type: 'divider'
    },
    {
      type: 'remove',
      name: 'remove',
      componentProps: {
        removeParentsIfNoChildren: true,
        breakRemoveOn: {
          'x-component': 'Grid',
        },
      }
    }
  ]
});
