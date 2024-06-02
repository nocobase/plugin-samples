import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

export const schemaSettingsSrcItem: SchemaSettingsItemType = {
  name: 'src',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Edit src',
      schema: {
        type: 'object',
        title: 'Edit src',
        properties: {
          src: {
            title: 'Image',
            type: 'string',
            default: filedSchema['x-decorator-props']?.image?.src,
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
            },
          },
        },
      },
      onSubmit(image: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              src: image.src,
            },
          },
        })
      }
    };
  },
};
