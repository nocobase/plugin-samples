import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useImageTranslation } from "../../locale";

export const schemaSettingsLazyItem: SchemaSettingsItemType = {
  name: 'lazy',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const { t } = useImageTranslation();

    return {
      title: t('Lazy'),
      checked: !!filedSchema['x-decorator-props']?.image?.lazy,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            image: {
              ...filedSchema['x-decorator-props']?.['image'],
              lazy: v,
            },
          },
        })
      },
    };
  },
};
