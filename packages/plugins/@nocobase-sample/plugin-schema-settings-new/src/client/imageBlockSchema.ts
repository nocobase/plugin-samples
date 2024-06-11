import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { imageSettings } from "./imageBlockSettings";
import { ImageProps } from "./ImageBlock";

export function useImageProps(): ImageProps {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.['image'];
}

export const imageSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-decorator-props': {
    image: {}
  },
  properties: {
    image: {
      'x-component': 'Image2',
      'x-use-component-props': 'useImageProps'
    }
  },
  'x-settings': imageSettings.name
};

