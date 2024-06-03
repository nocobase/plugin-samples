import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { CarouselBlockNameLowercase } from "../../constants";

export const schemaSettingsAutoplayItem: SchemaSettingsItemType = {
  name: 'autoplay',
  type: 'switch',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Autoplay',
      checked: !!filedSchema['x-decorator-props']?.[CarouselBlockNameLowercase]?.autoplay,
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [CarouselBlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[CarouselBlockNameLowercase],
              autoplay: v,
            },
          },
        })
      },
    };
  },
};
