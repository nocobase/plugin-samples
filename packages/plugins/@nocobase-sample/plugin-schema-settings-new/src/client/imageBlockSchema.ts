import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { imageBlockSettings } from "./imageBlockSettings";
import { ImageBlockProps } from "./ImageBlock";

export function useImageBlockProps(): ImageBlockProps {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.['image'];
}

export const imageBlockSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    image: {}
  },
  properties: {
    image: {
      'x-component': 'ImageBlock2',
      'x-use-component-props': 'useImageBlockProps'
    }
  },
  'x-settings': imageBlockSettings.name
};

