import React, { FC } from 'react';
import { ISchema, SchemaInitializerItemType, SchemaSettings, useSchemaInitializer, withDynamicSchemaProps } from '@nocobase/client';

export const ImageBlock: FC<{ height?: number }> = withDynamicSchemaProps(({ height = 500 }) => {
  return <div style={{ height }}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src="https://picsum.photos/2000/500"
    />
  </div>
}, { displayName: 'ImageBlock' })

export const imageBlockSettings = new SchemaSettings({
  name: 'blockSettings:image',
  items: [
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});

export const imageBlockSchema: ISchema = {
  type: 'void',
  'x-decorator': 'CardItem',
  'x-component': 'ImageBlock',
  'x-settings': imageBlockSettings.name
};

export const imageInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'ImageBlock',
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
