import { ISchema } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { ImageProps } from "../component";
import { imageSettings } from "../settings";
import { BlockName } from "../constants";

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
      'x-component': BlockName,
      'x-use-component-props': 'useImageProps'
    }
  },
  'x-settings': imageSettings.name
};

