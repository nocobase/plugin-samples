import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { useImageTranslation } from "../../locale";
import { BlockNameLowercase } from "../../constants";

export const lazySchemaSettingsItem: SchemaSettingsItemType = {
  name: 'lazy',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const { t } = useImageTranslation();

    return {
      title: t('Lazy'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.lazy,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              lazy: v,
            },
          },
        })
      },
    };
  },
};
