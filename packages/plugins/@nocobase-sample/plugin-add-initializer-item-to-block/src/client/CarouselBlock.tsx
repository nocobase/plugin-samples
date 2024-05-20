import React, { FC } from 'react';
import { Carousel, Result } from 'antd';
import { useFieldSchema } from '@formily/react'
import { ISchema, SchemaInitializerItemType, SchemaSettings, useDesignable, useSchemaInitializer, withDynamicSchemaProps } from '@nocobase/client';

export interface CarouselBlockProps {
  images: { url: string; title: string }[];
  /**
   * @default 300
   */
  height?: number;
}

export const CarouselBlock: FC<{ images: any[], height?: number }> = withDynamicSchemaProps(({ images, height = 300 }) => {
  return (images && images.length) ? (
    <Carousel>
      {images.map((image) => (
        <div>
          <img key={image.title} src={image.url} alt={image.title} style={{ height, width: '100%', objectFit: 'cover', display: 'inline-block' }} />
        </div>
      ))}
    </Carousel>
  ) : <Result status='404' />
}, { displayName: 'CarouselBlock' })

export const carouselSettings = new SchemaSettings({
  name: 'blockSettings:carousel',
  items: [
    {
      name: 'images',
      type: 'actionModal',
      useComponentProps() {
        const fieldSchema = useFieldSchema();
        const { deepMerge } = useDesignable();

        const modalSchema: ISchema = {
          type: 'object',
          properties: {
            images: {
              title: 'Edit images',
              type: 'string',
              default: fieldSchema['x-component-props']?.images,
              'x-decorator': 'FormItem',
              'x-component': 'Upload.Attachment',
              'x-component-props': {
                action: 'attachments:create',
                multiple: true,
              },
            },
          },
        }
        return {
          title: 'Edit images',
          schema: modalSchema,
          onSubmit({ images }: any) {
            deepMerge({
              'x-uid': fieldSchema['x-uid'],
              'x-component-props': {
                images,
              },
            });
          }
        }
      },
    },
    {
      name: 'height',
      type: 'actionModal',
      useComponentProps() {
        const fieldSchema = useFieldSchema();
        const { deepMerge } = useDesignable();

        const modalSchema: ISchema = {
          type: 'object',
          properties: {
            height: {
              title: 'Edit height',
              type: 'number',
              default: fieldSchema['x-component-props']?.height || 300,
              'x-decorator': 'FormItem',
              'x-component': 'InputNumber',
            },
          },
        }
        return {
          title: 'Edit height',
          schema: modalSchema,
          onSubmit({ height }: any) {
            deepMerge({
              'x-uid': fieldSchema['x-uid'],
              'x-component-props': {
                height,
              },
            });
          }
        }
      },
    },
    {
      type: 'remove',
      name: 'remove',
    }
  ]
});

export const CarouselInitializerItem: SchemaInitializerItemType = {
  type: 'item',
  name: 'CarouselBlock',
  icon: 'PlayCircleOutlined',
  useComponentProps() {
    const { insert } = useSchemaInitializer();
    return {
      title: 'Carousel',
      onClick: () => {
        const carouselBlockSchema: ISchema = {
          type: 'void',
          'x-decorator': 'CardItem',
          'x-component': 'CarouselBlock',
          'x-settings': carouselSettings.name,
        };

        insert(carouselBlockSchema);
      },
    };
  },
}

