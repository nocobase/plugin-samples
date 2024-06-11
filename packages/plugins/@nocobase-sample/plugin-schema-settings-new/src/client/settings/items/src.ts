import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useImageTranslation } from "../../locale";

export const schemaSettingsSrcItem: SchemaSettingsItemType = {
  name: 'src',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const { t } = useImageTranslation();

    return {
      title: t('Edit Image'),
      schema: {
        type: 'object',
        title: t('Edit Image'),
        properties: {
          src: {
            title: t('Image'),
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
