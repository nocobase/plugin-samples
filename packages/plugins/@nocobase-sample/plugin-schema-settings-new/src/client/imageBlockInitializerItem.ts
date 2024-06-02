import { SchemaInitializerItemType, useSchemaInitializer } from '@nocobase/client';
import { imageBlockSchema } from './imageBlockSchema';

export const imageBlockInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'ImageBlock2',
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Image',
      onClick: () => {

        insert(imageBlockSchema);
      },
    };
  },
}
