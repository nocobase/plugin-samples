import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { imageSchema } from '../schema';
import { BlockName, BlockNameLowercase } from '../constants';
import { useT } from '../locale';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: BlockNameLowercase,
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    const t = useT();
    return {
      title: t(BlockName),
      onClick: () => {
        insert(imageSchema);
      },
    };
  },
}
