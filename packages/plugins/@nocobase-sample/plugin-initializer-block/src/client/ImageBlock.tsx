import React from 'react';
import { ISchema, SchemaInitializerItemType, SchemaSettings, useSchemaInitializer } from '@nocobase/client';

export const ImageBlock = () => {
  return <div style={{ height: 500 }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'ImageBlock',
  icon: 'FileImageOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Image',
      onClick: () => {
        const imageBlockSchema: ISchema = {
          type: 'void',
          'x-decorator': 'CardItem',
          'x-component': 'ImageBlock',
          'x-settings': imageBlockSettings.name
        };

        insert(imageBlockSchema);
      },
    };
  },
}
