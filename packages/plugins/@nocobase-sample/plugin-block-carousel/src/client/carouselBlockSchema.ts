import { ISchema } from '@nocobase/client';
import { useFieldSchema } from '@formily/react'

import { carouselSettings } from './carouselSettings';
import { CarouselBlockName, CarouselBlockNameLowercase } from './constants';

export function useCarouselBlockProps() {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[CarouselBlockNameLowercase]
}

export const carouselBlockSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-settings': carouselSettings.name,
  'x-decorator-props': {
    [CarouselBlockNameLowercase]: {},
  },
  properties: {
    carousel: {
      type: 'void',
      'x-component': CarouselBlockName,
      'x-use-component-props': useCarouselBlockProps.name
    }
  }
};
