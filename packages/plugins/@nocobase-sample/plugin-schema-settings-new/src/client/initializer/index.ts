import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { imageSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';
import { useImageTranslation } from '../locale';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const { t } = useImageTranslation();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(imageSchema);
      },
    };
  },
}
