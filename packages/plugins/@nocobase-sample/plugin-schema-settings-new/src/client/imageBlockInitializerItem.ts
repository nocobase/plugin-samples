import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { imageSchema } from './imageBlockSchema';

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'Image2',
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Image',
      onClick: () => {

        insert(imageSchema);
      },
    };
  },
}
