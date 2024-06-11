import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useImageTranslation } from '../../locale'

export const schemaSettingsHeightItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const { t } = useImageTranslation();

    return {
      title: t('Edit height'),
      schema: {
        type: 'object',
        title: t('Edit height'),
        properties: {
          height: {
            title: t('Height'),
            type: 'number',
            default: filedSchema['x-decorator-props']?.image?.height,
            'x-decorator': 'FormItem',
            'x-component': 'InputNumber',
          },
        },
      },
      onSubmit({ height }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              height,
            },
          },
        })
      }
    };
  },
};
