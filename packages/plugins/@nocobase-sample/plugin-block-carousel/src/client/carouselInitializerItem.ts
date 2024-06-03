import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { carouselBlockSchema } from './carouselBlockSchema';
import { CarouselBlockName, CarouselBlockNameLowercase } from './constants';

export const carouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: CarouselBlockNameLowercase,
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: CarouselBlockName,
      onClick: () => {
        insert(carouselBlockSchema);
      },
    };
  },
}

