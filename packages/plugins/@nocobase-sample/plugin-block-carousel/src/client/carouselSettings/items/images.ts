import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { CarouselBlockNameLowercase } from "../../constants";

export const schemaSettingsImagesItem: SchemaSettingsItemType = {
  name: 'images',
  type: 'actionModal',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Edit Images',
      schema: {
        type: 'object',
        title: 'Edit Images',
        properties: {
          src: {
            title: 'Images',
            type: 'string',
            default: filedSchema['x-decorator-props'][CarouselBlockNameLowercase]?.images ?? [],
            'x-decorator': 'FormItem',
            'x-component': 'Upload.Attachment',
            'x-component-props': {
              action: 'attachments:create',
              multiple: true
            },
          },
        },
      },
      onSubmit({ src: images }: any) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [CarouselBlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[CarouselBlockNameLowercase],
              images,
            },
          },
        })
      }
    };
  },
};
