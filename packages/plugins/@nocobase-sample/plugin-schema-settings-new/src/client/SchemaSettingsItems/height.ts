import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

export const schemaSettingsHeightItem: SchemaSettingsItemType = {
  name: 'height',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Edit height',
      schema: {
        type: 'object',
        title: 'Edit Height',
        properties: {
          height: {
            title: 'Image Height',
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
