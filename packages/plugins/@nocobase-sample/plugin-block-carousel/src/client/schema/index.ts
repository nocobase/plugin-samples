import { ISchema } from '@nocobase/client';
import { useFieldSchema } from '@formily/react'

import { carouselSettings } from '../settings';
import { BlockName, BlockNameLowercase } from '../constants';

export function useCarouselBlockProps() {
  const fieldSchema = useFieldSchema();
  return fieldSchema.parent?.['x-decorator-props']?.[BlockNameLowercase]
}

export const carouselSchema: ISchema = {
  type: 'void',
  'x-component': 'CardItem',
  'x-settings': carouselSettings.name,
  'x-decorator-props': {
    [BlockNameLowercase]: {},
  },
  properties: {
    carousel: {
      type: 'void',
      'x-component': BlockName,
      'x-use-component-props': 'useCarouselBlockProps'
    }
  }
};
