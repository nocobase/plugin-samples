import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';

import { BlockNameLowercase } from "../../constants";
import { useCarouselTranslation } from "../../local";

export const schemaSettingsAutoplayItem: SchemaSettingsItemType = {
  name: 'autoplay',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();
    const { t } = useCarouselTranslation();

    return {
      title: t('Autoplay'),
      checked: !!filedSchema['x-decorator-props']?.[BlockNameLowercase]?.autoplay,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [BlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[BlockNameLowercase],
              autoplay: v,
            },
          },
        })
      },
    };
  },
};