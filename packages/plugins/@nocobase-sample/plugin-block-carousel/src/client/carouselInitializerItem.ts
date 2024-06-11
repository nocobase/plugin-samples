import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';

import { carouselBlockSchema } from './carouselBlockSchema';
import { BlockName, BlockNameLowercase } from './constants';
import { useCarouselTranslation } from './local';

export const carouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = useCarouselTranslation();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(carouselBlockSchema);
      },
    };
  },
}

