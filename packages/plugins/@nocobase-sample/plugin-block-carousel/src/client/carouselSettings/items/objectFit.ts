import { SchemaSettingsItemType, useDesignable, } from "@nocobase/client";
import { useFieldSchema } from '@formily/react';
import { CarouselBlockNameLowercase } from "../../constants";

export const schemaSettingsObjectFitItem: SchemaSettingsItemType = {
  name: 'objectFit',
  type: 'select',
  useComponentProps() {
    const filedSchema = useFieldSchema();
    const { deepMerge } = useDesignable();

    return {
      title: 'Object Fit',
      options: [
        { label: 'Cover', value: 'cover' },
        { label: 'Contain', value: 'contain' },
        { label: 'Fill', value: 'fill' },
        { label: 'None', value: 'none' },
        { label: 'Scale Down', value: 'scale-down' },
      ],
      value: filedSchema['x-decorator-props']?.[CarouselBlockNameLowercase]?.objectFit || 'cover',
      onChange(v) {
        deepMerge({
          'x-uid': filedSchema['x-uid'],
          'x-decorator-props': {
            ...filedSchema['x-decorator-props'],
            [CarouselBlockNameLowercase]: {
              ...filedSchema['x-decorator-props']?.[CarouselBlockNameLowercase],
              objectFit: v,
            },
          },
        })
      },
    };
  },
};
