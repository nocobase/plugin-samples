import { SchemaSettings, SchemaSettingsBlockTitleItem } from '@nocobase/client';
import { BlockNameLowercase } from '../constants';
import { schemaSettingsHeightItem } from './items/height';
import { schemaSettingsObjectFitItem } from './items/objectFit';
import { schemaSettingsImagesItem } from './items/images';
import { schemaSettingsAutoplayItem } from './items/autoplay';

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
    schemaSettingsImagesItem,
    schemaSettingsHeightItem,
    schemaSettingsObjectFitItem,
    schemaSettingsAutoplayItem,
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
